import {Theme} from '@modules/_shared/ui/theme/AppTheme';

type IconType =
    | 'material'
    | 'font-awesome'
    | 'font-awesome-5'
    | 'ionicon'
    | 'material-community-icons'
    | "feather"
    | 'entypo';

export interface IconProps {
    name: string;
    color?: keyof Theme['colors'];
    size?: keyof Theme['iconSizes'];
    numberSize?: number;
    type?: IconType;
    style?: any;
}
