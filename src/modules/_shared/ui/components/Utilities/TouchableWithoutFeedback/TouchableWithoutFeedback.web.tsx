import React from 'react';
import {
    TouchableWithoutFeedback as BaseTouchableWithoutFeedback,
    TouchableWithoutFeedbackProps as BaseTouchableWithoutFeedbackProps
} from 'react-native';

export default function TouchableWithoutFeedback(
    props: BaseTouchableWithoutFeedbackProps
) {
    return <BaseTouchableWithoutFeedback {...props} />;
}
