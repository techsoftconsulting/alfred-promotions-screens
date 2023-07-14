import {checkInputSource} from "@main-components/Form";
import {BaseInput} from "@main-components/Form/inputs/BaseInput";
import {
    BaseCountryPickerInput
} from "@main-components/Form/inputs/CountryPickerInput/components/BaseCountryPickerInput";
import useFormFieldErrors from "@modules/_shared/domain/form/use-form-field-errors";
import useInput from "@modules/_shared/domain/form/useInput";
import React from 'react';
import {CountryPickerInputProps} from './CountryPickerInputProps';

export function CountryPickerInput({
    label,
    defaultValue,
    source,
    validate,
    ...rest
}: CountryPickerInputProps) {
    checkInputSource({source});

    const {id, input, isRequired, meta, ref} = useInput({
        defaultValue: defaultValue,
        validate: validate,
        source: source as string
    });

    const {hasError, error} = useFormFieldErrors(source as string);

    return (
        <BaseInput
            error={hasError ? error : undefined}
            label={label}
            helperText={rest.helperText}
            noMargin={rest.noMargin}
            required={rest.required}
        >
            <BaseCountryPickerInput
                onBlur={input?.onBlur}
                onChangeText={input?.onChange}
                value={input?.value}
                {...rest}
            />
        </BaseInput>
    );
}
