import {Theme} from '@modules/_shared/ui/theme/AppTheme';

export interface FabProps {
    icon?: any;
    small?: boolean;
    onPress?: () => void;
    textColor?: keyof Theme['colors'];
    style?: any;
    actions?: { label?: string; icon: any; onPress?: any; small?: boolean }[] | undefined;
}
