import React from 'react';
import TextInput from '../TextInput';

export default function EmailTextInput(props) {
    const propsValidation = props.validate
        ? typeof props.validate === 'object'
            ? [...props.validate]
            : [props.validate]
        : [];

    const baseValidate = [...propsValidation];

    return (
        <TextInput
            {...props}
            keyboardType="email-address"
            autoCapitalize="none"
            validate={baseValidate}
        />
    );
}
