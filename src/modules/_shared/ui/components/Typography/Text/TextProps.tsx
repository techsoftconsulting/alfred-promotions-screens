import { Theme } from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';
import { TextProps as BaseTextProps } from 'react-native';

export interface TextProps extends BaseTextProps {
    color?: keyof Theme['colors'];
    variant?: keyof Theme['textVariants'];
    children?: React.ReactNode | string;
    note?: boolean;
    bold?: boolean;
    uppercase?: boolean;
    align?: 'auto' | 'center' | 'justify' | 'left' | 'right';
    numberOfLines?: number;
}
