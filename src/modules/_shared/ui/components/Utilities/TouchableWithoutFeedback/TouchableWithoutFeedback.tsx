import React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';
import { TouchableWithoutFeedback as BaseTouchableWithoutFeedback } from 'react-native-gesture-handler';
import { GenericTouchableProps } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';

export default function TouchableWithoutFeedback(
    props: TouchableWithoutFeedbackProps & GenericTouchableProps
) {
    return <BaseTouchableWithoutFeedback {...props} />;
}
