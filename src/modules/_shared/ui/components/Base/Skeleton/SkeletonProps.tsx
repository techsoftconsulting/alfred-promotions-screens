import { StyleProp } from 'react-native';

export interface SkeletonProps {
    type: 'rectangle' | 'square' | 'circle';
    loading: boolean;
    size?: number;
    height?: number | string;
    width?: number | string;
    color?: string;
    highlightColor?: string;
    rows?: number;
    style?: StyleProp<any>;
}
