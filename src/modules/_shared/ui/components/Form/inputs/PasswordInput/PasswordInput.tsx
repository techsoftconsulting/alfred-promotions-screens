import TextInput from '@main-components/Form/inputs/TextInput';
import React, { useState } from 'react';
import { PasswordInputProps } from './PasswordInputProps';

export default function PasswordInput(props: PasswordInputProps) {
    const [visiblePassword, setVisiblePassword] = useState(false);

    return (
        <TextInput
            {...props}
            secureTextEntry={!visiblePassword}
            rightIcon={{
                name: visiblePassword ? 'eye-outline' : 'eye-off-outline',
                color: 'primaryMain',
                size: 'm',
                onPress: () => setVisiblePassword(!visiblePassword)
            }}
        />
    );
}
