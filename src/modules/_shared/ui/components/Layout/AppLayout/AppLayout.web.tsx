import { Box } from '@main-components/Base/Box';
import React from 'react';
import { Theme, useTheme } from '@modules/_shared/ui/theme/AppTheme';
import AppMenu, { APP_MENU_HEIGHT, SPACE_BAR_HEIGHT } from '@modules/promotions/ui/components/AppMenu';
import SizingUtils from '@utils/misc/sizing-utils';

interface AppLayoutProps {
    children: JSX.Element;
    bg?: keyof Theme['colors'];
    title?: string;
    loading?: boolean;
    headerBgColor?: string;
    LoadingComponent?: JSX.Element;
}

const MAIN_MENU_WIDTH = SizingUtils.scale(50);

export default function AppLayout(props: AppLayoutProps) {
    const theme = useTheme();

    return (

            <Box
                    bg={'white'}
                    testID={'app-layout'}
                    style={{
                        overflow: 'auto',
                        backgroundColor: props.bg ? theme.colors[props.bg] : theme.colors.white,
                        paddingBottom: 0 /* Trial bar */,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1
                    }}
            >

                <AppMenu />

                <div
                        style={{
                            marginTop: SPACE_BAR_HEIGHT + APP_MENU_HEIGHT / 2,
                            height: '100%'
                        }}
                >

                    <Box
                            flex={1}
                            height='100%'

                            p={'s'}
                            style={{
                                marginLeft: MAIN_MENU_WIDTH,
                                paddingTop: APP_MENU_HEIGHT,
                                marginRight: MAIN_MENU_WIDTH
                            }}
                            bg={props.bg ?? 'white'}
                    >

                        {props.children}

                    </Box>
                </div>
            </Box>
    );
}
