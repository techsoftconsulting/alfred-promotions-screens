import { Theme } from '@shared/ui/theme/AppTheme';

export interface InputWrapperProps {
    hasError?: boolean | undefined;
    children: JSX.Element;
    bg?: keyof Theme['colors'];
    style?: any;
}