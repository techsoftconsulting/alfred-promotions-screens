import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Switch } from 'react-native-paper';
import { Theme, useTheme } from '@shared/ui/theme/AppTheme';
import { BaseInputProps } from '@main-components/Form/inputs/BaseInput/BaseInputProps';
import { Box } from '@main-components/Base/Box';

export interface BaseSwitchInputProps extends BaseInputProps {
    value?: boolean;
    onChange?: (num: any) => void;
    error?: string;
    buttons?: {
        style?: StyleProp<ViewStyle>;
        buttonMaxColor?: string;
        buttonMinColor?: string;
        textColor?: string;
    };
    color?: string;
    containerStyle?: StyleProp<ViewStyle>;
    label?: string;
    style?: any;
    selectedColor?: keyof Theme['colors'];
    labelColor?: keyof Theme['colors'];
}

export default function BaseSwitchInput({
    selectedColor,
    ...props
}: BaseSwitchInputProps) {
    const theme = useTheme();

    return (
            <Box alignItems={'flex-start'}>
                <Switch
                        trackColor={{
                            false: theme.colors.greyMain,
                            true: selectedColor
                                    ? theme.colors[selectedColor]
                                    : theme.colors.primaryMain
                        }}
                        value={props.value}
                        thumbColor={theme.colors.white}
                        onValueChange={(newValue) => {
                            props.onChange && props.onChange(newValue);
                        }}
                        theme={{
                            colors: {
                                accent: theme.colors.white,
                                primary: theme.colors.primaryMain
                            }
                        }}
                />
            </Box>
    );
}
