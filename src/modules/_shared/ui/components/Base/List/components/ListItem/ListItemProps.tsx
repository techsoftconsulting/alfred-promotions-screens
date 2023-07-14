import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import React from 'react';

export interface ListItemProps {
    title: React.ReactNode | string;
    description?: React.ReactNode | string;
    titleStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
    left?: (props: {
        color: string;
        style?: {
            marginLeft: number;
            marginRight: number;
            marginVertical?: number;
        };
    }) => React.ReactNode;
    right?: (props: {
        color: string;
        style?: {
            marginRight: number;
            marginVertical?: number;
        };
    }) => React.ReactNode;
    onPress?: () => void;
    disabled?: boolean;
    titleNumberOfLines?: number;
    descriptionNumberOfLine?: number;
}
