import React from 'react';
import {FlatList as BaseFlatList} from 'react-native';
import {FlatListProps} from './FlatListProps';

export default class FlatList extends React.Component<FlatListProps> {
    render() {
        return (
            <BaseFlatList
                onRefresh={this.props.onRefresh}
                refreshing={this.props.refreshing}
                scrollEnabled={this.props.scrollEnabled}
                contentContainerStyle={this.props.contentContainerStyle}
                style={this.props.style}
                numColumns={this.props.numColumns}
                data={this.props.items}
                ListEmptyComponent={this.props.ListEmptyComponent}
                ListHeaderComponent={this.props.ListHeaderComponent}
                renderItem={this.props.renderItem}
                onScroll={this.props.onScroll}
                keyExtractor={this.props.keyExtractor}
                ref={this.props.ref}
                maxToRenderPerBatch={this.props.maxToRenderPerBatch}
                windowSize={this.props.windowSize}
            />
        );
    }
}

