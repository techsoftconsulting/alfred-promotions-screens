import { Theme } from '@modules/_shared/ui/theme/AppTheme';
import { GestureResponderEvent } from 'react-native';
import { IconProps } from '../Icon';

export interface IconButtonProps {
    onPress: (event: GestureResponderEvent) => void;
    backgroundColor?: keyof Theme['colors'];
    iconColor?: keyof Theme['colors'];
    borderRadius?: number;
    iconName: IconProps['name'];
    iconType?: IconProps['type'] | 'app';
    iconSize?: number;
    containerSize?: number;
    containerPadding?: keyof Theme['spacing'] | null;
    loading?: boolean;
    disabled?: boolean;
}
