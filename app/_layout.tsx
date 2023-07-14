import React, { useEffect } from 'react';
import theme from '@shared/ui/theme/AppTheme';
import AppUtilsProvider from '@shared/infrastructure/providers/app-utils-provider';
import AppDataProvider from '@shared/infrastructure/providers/app-data-provider';
import AppServiceProvider from '@shared/infrastructure/providers/app-service-provider';
import AppProvider from '@shared/infrastructure/providers/app-provider';
import NotificationController from '@main-components/Utilities/NotificationController';
import ConfirmController from '@main-components/Utilities/ConfirmModalController/ConfirmModalController';
import Head from 'expo-router/head';
import { useRouter, withLayoutContext } from 'expo-router';
import { useLoadAssets } from '@shared/domain/navigation/use-load-assets';
import { Box } from '@main-components/Base/Box';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import useFindConfigurations from '@modules/promotions/application/config/use-find-configurations';

const { Navigator } = createStackNavigator();

const AppStack = withLayoutContext<StackNavigationOptions, typeof Navigator>(Navigator);


export default function Layout() {
    return (
            <AppProvider
                    theme={theme}
                    utilsProvider={AppUtilsProvider}
                    dataProvider={AppDataProvider}
                    serviceProvider={AppServiceProvider}
            >
                <>
                    <Head>

                        <link
                                href={`${__DEV__ ? '../public/' : ''}general.css`}
                                rel='stylesheet'
                        />

                    </Head>

                    <AuthController>
                        <AppStack
                                screenOptions={{
                                    cardStyle: {
                                        backgroundColor: 'white'
                                        // paddingBottom: SizingUtils.vscale(50)
                                    },
                                    title: '',
                                    headerShown: false
                                }}
                        />
                    </AuthController>
                    <NotificationController />
                    <ConfirmController />
                </>
            </AppProvider>
    );
}


function AuthController({ children }) {

    const { loaded: assetsLoaded } = useLoadAssets();
    const { data: config, loading } = useFindConfigurations();
    const isReady = assetsLoaded && !loading;
    const router = useRouter();


    useEffect(() => {
        if (!isReady) return;
        if (!config?.mallId) {
            router.replace('/config');
        }
    }, [isReady, config?.mallId]);

    if (!isReady) return <Box />;

    return (
            <>
                {children}
            </>
    );
}