import React from 'react';
import { FlatGrid as BaseFlatGrid } from 'react-native-super-grid';
import { FlatGridProps } from './FlatGridProps';

export default class FlatGrid extends React.Component<FlatGridProps> {
    render() {
        return (
            <BaseFlatGrid
                ListEmptyComponent={this.props.ListEmptyComponent}
                ListHeaderComponent={this.props.ListHeaderComponent}
                scrollEnabled={this.props.scrollEnabled}
                nestedScrollEnabled={this.props.nestedScrollEnabled}
                spacing={this.props.spacing}
                itemDimension={this.props.itemDimension}
                maxDimension={this.props.maxDimension}
                staticDimension={this.props.staticDimension}
                data={this.props.data}
                renderItem={this.props.renderItem}
                numColumns={this.props.numColumns}
                contentContainerStyle={this.props.contentContainerStyle}
                columnWrapperStyle={this.props.columnWrapperStyle}
                itemContainerStyle={this.props.itemContainerStyle || {}}
                onScroll={this.props.onScroll}
                showsVerticalScrollIndicator={
                    this.props.showsVerticalScrollIndicator
                }
                showsHorizontalScrollIndicator={
                    this.props.showsHorizontalScrollIndicator
                }
            />
        );
    }
}
