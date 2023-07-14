import { checkInputSource } from '@main-components/Form/Form';
import { BaseInput } from '@main-components/Form/inputs/BaseInput';
import BaseTimeInput from '@main-components/Form/inputs/TimeInput/components/BaseTimeInput';
import useFormFieldErrors from '@modules/_shared/domain/form/use-form-field-errors';
import useInput from '@modules/_shared/domain/form/useInput';
import * as React from 'react';
import { TimeInputProps } from './TimeInputProps';

function TimeInput({
    label,
    onBlur,
    onFocus,
    onChange,
    source,
    defaultValue,
    validate,
    ...rest
}: TimeInputProps & {
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
                <BaseTimeInput
                        onBlur={input?.onBlur}
                        onChangeText={(props) => {
                            input?.onChange(props);
                            onChange?.(props);
                        }}
                        value={input?.value}
                        rightIcon={{
                            name: 'clock',
                            numberSize: 12
                        }}
                        {...rest}
                />
            </BaseInput>
    );
}

TimeInput.defaultProps = {};

export default TimeInput;
