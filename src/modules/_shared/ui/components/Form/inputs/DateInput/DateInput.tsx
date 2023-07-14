import { checkInputSource } from '@main-components/Form/Form';
import { BaseInput } from '@main-components/Form/inputs/BaseInput';
import BaseDateInput from '@main-components/Form/inputs/DateInput/components/BaseDateInput';
import useFormFieldErrors from '@modules/_shared/domain/form/use-form-field-errors';
import useInput from '@modules/_shared/domain/form/useInput';
import * as React from 'react';
import { DateInputProps } from './DateInputProps';

function DateInput({
    label,
    defaultValue,
    source,
    validate,
    ...rest
}: DateInputProps & {
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
                <BaseDateInput
                        onBlur={rest?.onBlur}
                        onChangeText={(props) => {
                            input?.onChange(props);
                            rest.onChange?.(props);
                        }}
                        value={input?.value}
                        rightIcon={{
                            name: 'calendar',
                            numberSize: 12
                        }}
                        {...rest}
                />
            </BaseInput>
    );
}

DateInput.defaultProps = {};

export default DateInput;
