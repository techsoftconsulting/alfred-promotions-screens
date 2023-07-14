import { Theme } from '@modules/_shared/ui/theme/AppTheme';

export interface RatingProps {
    isDisabled: boolean;
    count: number;
    iconSize?: number;
    selectedColor?: keyof Theme['colors'];
    onFinish?: (value: number) => void;
}
