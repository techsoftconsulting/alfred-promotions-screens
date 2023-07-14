import { TextProps } from '@main-components/Typography/Text';
import { Theme } from '@modules/_shared/ui/theme/AppTheme';

export interface BadgeProps {
    title: string;
    color?: keyof Theme['colors'];
    containerStyle?: any;
    titleTextProps?: TextProps;
    textColor?: keyof Theme['colors'];
}
