import React from 'react';
import {Pressable, TouchableOpacityProps} from 'react-native';
import {
    GenericTouchableProps
} from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';

export default function TouchableOpacity(
    props: TouchableOpacityProps & GenericTouchableProps
) {
    return (
        <Pressable
            onPress={props.onPress}
            disabled={props.disabled}
            style={({pressed}) => [
                {
                    opacity: pressed ? 0.5 : 1,
                },
                props.style
            ]}
        >
            {props.children}
        </Pressable>
    )
    // return <BaseTouchableOpacity {...props} />;
}
