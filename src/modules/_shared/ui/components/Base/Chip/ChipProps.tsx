import { Theme } from '@modules/_shared/ui/theme/AppTheme';

export interface ChipProps {
    color?: keyof Theme['colors'];
    textColor?: keyof Theme['colors'];
    width?: number;
    label: string;
    onPress?: () => void;
    icon?: any;
    onClose?: () => void;
    radius?: number;
    style?: any,
    textStyle?: any
}
