import { Box } from '@main-components/Base/Box';
import { Snackbar } from '@main-components/Base/Snackbar';
import useNotificationProvider from '@modules/_shared/domain/hooks/use-notification-provider';
import React from 'react';
import { Platform } from 'react-native';

export default function NotificationController() {
    const {
        text,
        show,
        action,
        dispatch,
        autoHideDuration,
        notificationType
    } = useNotificationProvider((state) => ({
        text: state.text,
        show: state.show,
        dispatch: state.dispatch,
        autoHideDuration: state.autoHideDuration,
        notificationType: state.notificationType,
        action: state.action
    }));

    if (notificationType == 'screen') return <Box />;

    if (Platform.OS == 'web') {
        return (
                <Box
                        position={'fixed'}
                        width={'100%'}
                        bottom={50}
                        testID={'notifications'}
                        justifyContent='center'
                        alignItems='center'
                >
                    <Box
                            maxWidth={500}
                            width='100%'
                            flex={1}
                    >
                        <Snackbar
                                text={text}
                                type={notificationType || 'info'}
                                onDismiss={() => {
                                    dispatch({ type: 'HIDE_NOTIFICATION' });
                                }}
                                visible={show}
                                action={action}
                                duration={autoHideDuration ?? 1000}
                        />
                    </Box>
                </ Box>
        );
    }

    return (
            <Box
                    width='100%'
                    justifyContent='center'
                    alignItems='center'
            >
                <Box
                        maxWidth={Platform.OS === 'web' ? 500 : undefined}
                        width='100%'
                        flex={1}
                >
                    <Snackbar
                            text={text}
                            type={notificationType || 'info'}
                            onDismiss={() => {
                                dispatch({ type: 'HIDE_NOTIFICATION' });
                            }}
                            visible={show}
                            action={action}
                            duration={autoHideDuration}
                    />
                </Box>
            </Box>
    );
}