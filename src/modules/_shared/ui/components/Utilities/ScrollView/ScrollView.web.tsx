import {
    ScrollView as BaseScrollView,
    ScrollViewProps as BaseScrollViewProps
} from 'react-native';

export default function ScrollView(props: BaseScrollViewProps) {
    return <BaseScrollView {...props} />;
}
