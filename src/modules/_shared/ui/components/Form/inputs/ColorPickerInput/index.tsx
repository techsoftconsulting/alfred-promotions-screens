import { BaseInput } from '@main-components/Form/inputs/BaseInput';
import { Box } from '@main-components/Base';
import * as React from 'react';
import useInput from '@shared/domain/form/useInput';
import BaseColorPickerInput, {
    BaseColorPickerInputProps
} from '@main-components/Form/inputs/ColorPickerInput/components/BaseColorPickerInput';
import useFormFieldErrors from '@shared/domain/form/use-form-field-errors';
import { BaseInputProps } from '@main-components/Form/inputs/BaseInput/BaseInputProps';

export type ColorPickerInput = Omit<BaseColorPickerInputProps, 'checked'> &
    BaseInputProps & {
    label?: string;
};


export default function ColorPickerInput({
    label,
    title,
    onBlur,
    onFocus,
    onChange,
    source,
    meta,
    ...rest
}: ColorPickerInput) {
    const { id, input, isRequired, ref } = useInput({
        defaultValue: rest.defaultValue as boolean,
        validate: rest.validate,
        source: source as string
    });


    const { hasError, error } = useFormFieldErrors(source as string);
    
    return (
        <BaseInput
            error={hasError ? error : undefined}
            label={label}
            helperText={rest.helperText}
            noMargin={rest.noMargin}
            WrapperComponent={Box}
            required={rest.required}
        >
            <BaseColorPickerInput
                {...rest}
                onChange={input.onChange}
                value={input.value as boolean}
            />
        </BaseInput>
    );
}