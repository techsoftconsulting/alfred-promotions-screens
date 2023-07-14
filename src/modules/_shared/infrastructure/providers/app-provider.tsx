import DataProviderContext from '@modules/_shared/domain/contexts/data-provider-context';
import NotificationProviderContext from '@modules/_shared/domain/contexts/notification-provider-context';
import ServiceProviderContext from '@modules/_shared/domain/contexts/service-provider-context';
import UtilsProviderContext from '@modules/_shared/domain/contexts/utils-provider-context';
import { AppUtils } from '@modules/_shared/domain/models/app-utils';
import React, { useEffect, useState } from 'react';
import { Provider as MainComponentsProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from 'react-query';
import { setI18nConfig } from '../services/default-translator';
import LayoutContext from '@modules/_shared/ui/contexts/layout-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StylesProvider } from '@modules/_shared/infrastructure/providers/styles-provider';
import useSimpleEventBus from '@shared/infrastructure/event-bus/use-simple-event-bus';
import EventsProviderContext from '@modules/_shared/domain/contexts/events-provider-context';


const queryClient = new QueryClient();


interface AppProviderProps {
    children: any;
    customRoutes?: any;
    dataProvider: (userTokenId?: string) => object;
    serviceProvider: any;
    theme?: object;
    utilsProvider: AppUtils;
}

export default function AppProvider({
    children,
    theme,
    utilsProvider,
    dataProvider,
    serviceProvider
}: AppProviderProps) {
    return (
            <QueryClientProvider client={queryClient}>
                <UtilsProviderContext.Provider
                        value={{
                            utils: utilsProvider
                        }}
                >
                    <StylesProvider theme={theme}>
                        <NotificationProvider>
                            <LayoutProvider>
                                <ServiceProviderContext.Provider
                                        value={serviceProvider}
                                >
                                    <DataProvider value={dataProvider}>
                                        <EventsProvider>
                                            <MainComponentsProvider>
                                                {children}
                                            </MainComponentsProvider>
                                        </EventsProvider>
                                    </DataProvider>
                                </ServiceProviderContext.Provider>
                            </LayoutProvider>
                        </NotificationProvider>
                    </StylesProvider>
                </UtilsProviderContext.Provider>
            </QueryClientProvider>
    );
}

function EventsProvider({ children }) {
    const bus = useSimpleEventBus();

    return (
            <EventsProviderContext.Provider
                    value={bus}
            >
                {children}
            </EventsProviderContext.Provider>
    );
}

function LayoutProvider({ children }) {
    const [collapsedMenu, setCollapsedMenu] = useState(false);


    async function toggleCollapseMenu(collapse?: boolean) {
        const state = (() => {
            if (collapse !== undefined) {
                return (collapse ? 'COLLAPSED' : 'OPEN');
            }
            return (!collapsedMenu ? 'COLLAPSED' : 'OPEN');
        })();

        const shouldCollapse = state == 'COLLAPSED';

        await AsyncStorage.setItem('MENU_STATE', state);
        setCollapsedMenu(shouldCollapse);
    }

    useEffect(() => {
        (async () => {
            const state = await AsyncStorage.getItem('MENU_STATE');
            if (!state) return;
            setCollapsedMenu(state == 'COLLAPSED');
        })();
    }, []);

    return (
            <LayoutContext.Provider value={{ collapsedMenu, toggleCollapseMenu: toggleCollapseMenu }}>
                {children}
            </LayoutContext.Provider>
    );
}


function DataProvider({ children, value }) {

    return (
            <DataProviderContext.Provider
                    value={value('')}
            >
                {children}
            </DataProviderContext.Provider>
    );
}

function NotificationProvider({ children }) {
    const [state, dispatch] = React.useReducer(
            (prevState: any, action: any) => {
                switch (action.type) {
                    case 'SHOW_NOTIFICATION':
                        return {
                            ...prevState,
                            text: action.text,
                            show: true,
                            notificationType: action.notificationType,
                            messageArgs: action.messageArgs,
                            undoable: action.undoable,
                            autoHideDuration: action.autoHideDuration
                        };
                    case 'HIDE_NOTIFICATION':
                        return {
                            ...prevState,
                            text: '',
                            show: false
                        };

                    case 'SHOW_CONFIRM':
                        return {
                            ...prevState,
                            confirm: {
                                ...prevState.confirm,
                                show: true,
                                title: action.title,
                                content: action.content,
                                onConfirm: action.onConfirm,
                                onCancel: action.onCancel,
                                options: action.options
                            }
                        };

                    case 'HIDE_CONFIRM':
                        return {
                            ...prevState,
                            confirm: {
                                ...prevState.confirm,
                                show: false,
                                title: null,
                                content: null
                            }
                        };
                }
            },
            {
                isLoggedIn: false,
                userToken: null
            }
    );

    return (
            <NotificationProviderContext.Provider
                    value={{
                        text: state.text,
                        show: state.show,
                        notificationType: state.notificationType,
                        messageArgs: state.messageArgs,
                        undoable: state.undoable,
                        autoHideDuration: state.autoHideDuration,
                        confirm: state.confirm,
                        dispatch,
                        state
                    }}
            >
                {children}
            </NotificationProviderContext.Provider>
    );
}

function LocalizationProvider({ children }) {
    const [locale, setLocale] = useState('en');

    function changeLocale(locale: string) {
        const newSetLocale = setI18nConfig(locale);
        setLocale(newSetLocale);
    }

    return (
            <LocalizationContext.Provider value={{ locale, changeLocale }}>
                {children}
            </LocalizationContext.Provider>
    );
}
