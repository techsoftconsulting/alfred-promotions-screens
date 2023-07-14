import { Theme } from '@modules/_shared/ui/theme/AppTheme';
import { ActivityIndicatorProps as BaseActivityIndicatorProps } from 'react-native';

export interface ActivityIndicatorProps
    extends Omit<BaseActivityIndicatorProps, 'color'> {
    color?: keyof Theme['colors'];
}
