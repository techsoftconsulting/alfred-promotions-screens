import {ReactComponentElement} from 'react';

export interface FlatListProps {
    items: any[];
    renderItem: (params: any) => any;
    contentContainerStyle?: any;
    style?: any;
    ListHeaderComponent?: ReactComponentElement<any>;
    ListEmptyComponent?: ReactComponentElement<any>;
    onScroll?: any;
    keyExtractor?: any;
    numColumns?: number;
    scrollEnabled?: boolean;
    onRefresh?: () => any;
    refreshing?: boolean;
    ref?: any;
    maxToRenderPerBatch?: number;
    windowSize?: number
}
