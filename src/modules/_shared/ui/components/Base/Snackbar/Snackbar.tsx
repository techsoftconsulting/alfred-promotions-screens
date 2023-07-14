import Text from '@main-components/Typography/Text';
import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';
import { Snackbar as BaseSnackbar } from 'react-native-paper';
import { SnackbarProps } from './SnackbarProps';

export function Snackbar(props: SnackbarProps) {
    const theme = useTheme();

    const color = {
        info: theme.colors.infoMain,
        warning: theme.colors.warningMain,
        success: theme.colors.successMain,
        error: theme.colors.dangerMain,
        default: undefined
    };
    return (
            <BaseSnackbar
                    visible={props.visible}
                    onDismiss={props.onDismiss}
                    action={props.action}
                    duration={props.duration}
                    style={{
                        borderRadius: 30,
                        elevation: 0,
                        backgroundColor: color[props.type]
                    }}
                    theme={{
                        colors: {
                            text: 'white',
                            accent: 'white'
                        },
                        fonts: {
                            regular: {
                                fontFamily: theme.textVariants.body.fontFamily
                            },
                            medium: {
                                fontFamily: theme.textVariants.body.fontFamily
                            },
                            light: {
                                fontFamily: theme.textVariants.body.fontFamily
                            }
                        }
                    }}
            >
                <Text
                        color='white'
                        style={{ fontSize: 16 }}
                >
                    {props.text}
                </Text>
            </BaseSnackbar>
    );
}
