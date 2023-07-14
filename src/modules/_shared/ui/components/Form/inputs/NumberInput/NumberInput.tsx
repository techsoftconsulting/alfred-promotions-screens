import { checkInputSource } from '@main-components/Form/Form';
import { BaseInput } from '@main-components/Form/inputs/BaseInput';
import BaseTextInput from '@main-components/Form/inputs/TextInput/components/BaseTextInput';
import { onlyNumbers } from '@modules/_shared/domain/form/filters';
import useFormFieldErrors from '@modules/_shared/domain/form/use-form-field-errors';
import useInput from '@modules/_shared/domain/form/useInput';
import * as React from 'react';
import { NumberInputProps } from './NumberInputProps';

export function NumberInput({
    label,
    onBlur,
    onFocus,
    onChange,
    source,
    multiline,
    defaultValue,
    validate,
    ...rest
}: NumberInputProps & {
    source?: string;
    ref?: any;
    meta?: any;
    onChange?: any;
    validate?: any;
}) {
    checkInputSource({ source });

    const { id, input, isRequired, meta, ref } = useInput({
        defaultValue: defaultValue,
        validate: validate,
        source: source as string
    });

    const { hasError, error } = useFormFieldErrors(source as string);

    return (
            <BaseInput
                    error={hasError ? error : undefined}
                    label={label}
                    helperText={rest.helperText}
                    noMargin={rest.noMargin}
                    required={rest.required}
                    bg={rest.bg}
            >
                <BaseTextInput
                        onChangeText={(text) => {
                            input?.onChange(onlyNumbers(text));
                            onChange?.(onlyNumbers(text));
                        }}
                        value={input?.value?.toString()} // needs to be a string to be rendered :/
                        onBlur={onBlur}
                        onFocus={onFocus}
                        keyboardType='phone-pad'
                        {...rest}
                />
            </BaseInput>
    );
}
