import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface FlatGridProps {
    itemDimension?: number;
    maxDimension?: number;
    staticDimension?: number;
    data: any[];
    renderItem: any;
    spacing?: number;
    scrollEnabled?: boolean;
    contentContainerStyle?: StyleProp<ViewStyle>;
    numColumns?: number;
    ListHeaderComponent?:
        | React.ComponentType<any>
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | null
        | undefined;
    columnWrapperStyle?: StyleProp<ViewStyle>;
    onScroll?: any;
    nestedScrollEnabled?: boolean;
    ListEmptyComponent?:
        | React.ComponentType<any>
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | null
        | undefined;
    itemContainerStyle?: StyleProp<ViewStyle>;
    showsVerticalScrollIndicator?: boolean;
    showsHorizontalScrollIndicator?: boolean;
}
