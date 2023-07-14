import React from 'react';
import {
    TouchableOpacity as BaseTouchableOpacity,
    TouchableOpacityProps as BaseTouchableOpacityProps
} from 'react-native';

export default function TouchableOpacity(props: BaseTouchableOpacityProps) {
    return <BaseTouchableOpacity {...props} delayPressIn={200} />;
}
