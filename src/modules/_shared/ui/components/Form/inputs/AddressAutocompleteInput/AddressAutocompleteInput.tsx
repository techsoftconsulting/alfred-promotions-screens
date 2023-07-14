import {
    BaseAddressAutocompleteInput
} from '@main-components/Form/inputs/AddressAutocompleteInput/components/BaseAddressAutocompleteInput';
import { BaseInput } from '@main-components/Form/inputs/BaseInput';
import useFormFieldErrors from '@modules/_shared/domain/form/use-form-field-errors';
import useInput from '@modules/_shared/domain/form/useInput';
import React from 'react';
import { AddressAutocompleteInputProps } from './AddressAutocompleteInputProps';

export function AddressAutocompleteInput({
    source,
    defaultValue,
    validate,
    ...rest
}: AddressAutocompleteInputProps) {

    const { id, input, isRequired, meta, ref } = useInput({
        defaultValue: defaultValue,
        validate: validate,
        source: source as string
    });

    const { hasError, error } = useFormFieldErrors(source as string);

    return (
        <BaseInput
            error={error ? error : undefined}
            label={rest.label}
            helperText={rest.helperText}
            noMargin={rest.noMargin}
            required={rest.required}
            bg={rest.bg}
        >
            <BaseAddressAutocompleteInput
                value={input?.value}
                {...rest}
                onChange={(d) => {
                    input?.onChange(d);
                    rest?.onChange?.(d);
                }}
            />
        </BaseInput>
    );
}
