import { Theme } from '@shared/ui/theme/AppTheme';

export interface BaseInputProps {
    source?: string;
    ref?: any;
    validate?: any;
    helperText?: string;
    label?: string;
    defaultValue?: any;
    loaded?: boolean;
    loading?: boolean;
    disabled?: boolean;
    noMargin?: boolean;
    required?: boolean;
    errorColor?: keyof Theme['colors'];
    bg?: keyof Theme['colors'];
}
