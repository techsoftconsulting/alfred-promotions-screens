import React from 'react';
import { Platform, TextInputProps } from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import { Theme, useTheme } from '@shared/ui/theme/AppTheme';
import { IconProps } from '@main-components/Base';

export interface BaseMoneyInputProps
    extends Omit<TextInputProps, 'value' | 'onChangeText'> {
    placeholder?: string;
    leftIcon?: IconProps;
    borderColor?: keyof Theme['colors'];
    backgroundColor?: keyof Theme['colors'];
    value?: number;
    error?: string;
    label?: string;
    mode?: 'flat' | 'outlined' | 'rounded';
    disabled?: boolean;
    control?: any; // form control
    wrapper?: React.ReactNode;
    render?: any;
    style?: any;
    dense?: boolean;
    showUnderline?: boolean;
    onChangeText: any;
    minValue?: number;
    filterText?: (text: string) => string;
    labelColor?: keyof Theme['colors'];
    bg?: keyof Theme['colors'];
    helperText?: string;
}

export default function BaseMoneyInput({
    borderColor = 'secondaryMain',
    backgroundColor = 'secondaryLight',
    mode = 'flat',
    dense = true,
    showUnderline = true,
    onChangeText,
    ...props
}: BaseMoneyInputProps) {
    const theme = useTheme();
    return (
        <CurrencyInput
            {...props}
            selectionColor={theme.colors.textColor}
            onChangeValue={(value) => {
                onChangeText && onChangeText(value);
            }}
            value={props.value ?? null}
            placeholderTextColor={
                theme.colors.inputPlaceholderColor
            }
            editable={!props.disabled}
            style={{
                borderWidth: 0,
                outline: 0,
                height: 40,
                fontFamily: theme.textVariants.body.fontFamily,
                fontSize: theme.textVariants.body.fontSize,
                //  lineHeight: theme.textVariants.body.lineHeight,
                color: props.disabled ? theme.colors.greyMain : theme.colors.textInputColor,
                padding: Platform.OS == 'ios' ? 10 : 7,
                paddingLeft: 14,
                borderRadius: 4
            }}
        />
    );
}
