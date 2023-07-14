import { Theme } from '@modules/_shared/ui/theme/AppTheme';

export interface StatusBarProps {
    style?: any;
    color?: keyof Theme['colors'];
    translucent?: boolean;
    animated?: boolean;
}
