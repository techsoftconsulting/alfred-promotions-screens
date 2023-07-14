import {ReactComponentElement} from 'react';

export interface SectionListProps {
    sections: {
        title: string;
        data: any[],
        renderItem?: (params: any) => any;
    }[];
    renderItem: (params: any) => any;
    renderSectionHeader: (params: any) => any;
    renderSectionFooter?: (params: any) => any;
    contentContainerStyle?: any;
    style?: any;
    ListHeaderComponent?: ReactComponentElement<any>;
    ListEmptyComponent?: ReactComponentElement<any>;
    onScroll?: any;
    SectionSeparatorComponent?: any;
    listKey?: string
}
