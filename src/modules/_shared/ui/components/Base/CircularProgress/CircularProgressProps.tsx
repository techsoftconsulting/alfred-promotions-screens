import { Theme } from '@modules/_shared/ui/theme/AppTheme';
import { TextProps } from '@main-components/Typography/Text';

export interface CircularProgressProps {
    value: number;
    radius: number;
    activeStrokeColor?: keyof Theme['colors'];
    inactiveStrokeColor?: keyof Theme['colors'];
    textColor?: keyof Theme['colors'];
    textProps?: TextProps;
    renderText?: any;
}
