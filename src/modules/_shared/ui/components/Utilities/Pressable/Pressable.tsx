import React from 'react';
import { PressableProps } from './PressableProps';
import { Pressable as BasePressable } from 'react-native';

export function Pressable(props: PressableProps) {
    return (
        <BasePressable {...props} />
    );
}
