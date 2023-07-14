import { Theme } from '@modules/_shared/ui/theme/AppTheme';

export interface ProgressBarProps {
    progress: number;
    color?: keyof Theme['colors'];
    height?: number;
    borderRadius?: number;
    indeterminate?: boolean;
}
