import React from 'react';
import { ScrollViewProps } from 'react-native';
import { ScrollView as BaseScrollView } from 'react-native-gesture-handler';
import { GenericTouchableProps } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';

export default class ScrollView extends React.Component<
    ScrollViewProps & GenericTouchableProps
> {
    render() {
        return <BaseScrollView {...this.props} />;
    }
}
