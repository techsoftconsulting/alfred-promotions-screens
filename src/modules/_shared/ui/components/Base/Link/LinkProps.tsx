import { TextProps } from '@main-components/Typography/Text';
import { Theme } from '@modules/_shared/ui/theme/AppTheme';

export interface LinkProps {
    href?: string;
    target?: string;
    label: string | JSX.Element;
    textColor?: keyof Theme['colors'];
    textProps?: TextProps;
    to?: string;
}
