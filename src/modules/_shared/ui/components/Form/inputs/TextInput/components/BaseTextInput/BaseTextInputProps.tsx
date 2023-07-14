import { Theme } from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';
import { KeyboardTypeOptions, TextInputProps } from 'react-native';
import { IconProps } from '@main-components/Base';
import { BaseInputProps } from '@main-components/Form/inputs/BaseInput/BaseInputProps';

export type BaseTextInputProps = TextInputProps &
    BaseInputProps & {
    placeholder?: string;
    leftIcon?: IconProps;
    rightIcon?: IconProps & { onPress?: any };
    borderColor?: keyof Theme['colors'];
    backgroundColor?: keyof Theme['colors'];
    value?: string | number;
    // error?: string;
    // label?: string;
    hidden?: boolean;
    mode?: 'flat' | 'outlined';
    left?: {
        width: number;
        component: React.ReactNode;
    };
    disabled?: boolean;
    wrapper?: React.ReactNode;
    render?: any;
    style?: any;
    dense?: boolean;
    filterText?: (text: string) => string;
    keyboardType?: KeyboardTypeOptions;
};
