import { Theme } from '@modules/_shared/ui/theme/AppTheme';

export interface SearchBarProps {
    pointerEvents?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    onSubmit?: any;
    style?: any;
    placeholder?: string;
    onChange?: any;
    value?: string;
    textColor?: keyof Theme['colors'];
    bg?: keyof Theme['colors'];
}
