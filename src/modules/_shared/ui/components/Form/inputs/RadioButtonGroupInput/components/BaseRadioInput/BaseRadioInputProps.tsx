import { Theme } from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';

export interface BaseRadioInputProps {
    checked?: boolean;
    onChange?: any;
    value: any;
    id: string;
    color: keyof Theme['colors'];
    uncheckedColor: keyof Theme['colors'];
    title: string | React.ReactElement<{}>;
    disabled?: boolean;
}
