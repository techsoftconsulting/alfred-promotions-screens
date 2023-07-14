import { ViewProps } from 'react-native';

export interface PressableProps extends ViewProps {
    delayLongPress?: number,
    delayPressIn?: number,
    delayPressOut?: number,
    disabled?: boolean,
    onHoverIn?: (e: MouseEvent) => void
    onHoverOut?: (e: MouseEvent) => void
    onLongPress?: () => void
    onPress?: (e: MouseEvent) => void
    onPressIn?: (e: any) => void
    onPressOut?: (e: any) => void
    style?: any
}