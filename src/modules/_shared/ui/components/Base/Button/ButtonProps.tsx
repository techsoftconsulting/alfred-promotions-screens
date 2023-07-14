import { Theme } from '@modules/_shared/ui/theme/AppTheme';

export interface ButtonProps {
    onPress: () => void;
    title?: string;
    backgroundColor?: keyof Theme['colors'];
    titleColor?: keyof Theme['colors'];
    borderRadius?: keyof Theme['borderRadius'];
    size?: keyof Theme['buttonSizes'];
    loading?: boolean;
    icon?: any;
    raised?: boolean;
    block?: boolean;
    style?: any;
    contentStyle?: any;
    mode?: 'contained' | 'outlined' | 'text' | 'action';
    disabled?: boolean;
    uppercase?: boolean;
    compact?: boolean;
    flat?: boolean;
}
