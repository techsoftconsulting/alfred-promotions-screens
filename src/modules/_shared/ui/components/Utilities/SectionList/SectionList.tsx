import React from 'react';
import {SectionList as BaseSectionList} from 'react-native';
import {SectionListProps} from './SectionListProps';

export class SectionList extends React.Component<SectionListProps, any> {
    render() {
        return (
            <BaseSectionList
                listKey={this.props.listKey}
                contentContainerStyle={this.props.contentContainerStyle}
                style={this.props.style}
                ListEmptyComponent={this.props.ListEmptyComponent}
                ListHeaderComponent={this.props.ListHeaderComponent}
                renderItem={this.props.renderItem}
                renderSectionHeader={this.props.renderSectionHeader}
                onScroll={this.props.onScroll}
                sections={this.props.sections}
                renderSectionFooter={this.props.renderSectionFooter}
                SectionSeparatorComponent={this.props.SectionSeparatorComponent}
            />
        );
    }
}
