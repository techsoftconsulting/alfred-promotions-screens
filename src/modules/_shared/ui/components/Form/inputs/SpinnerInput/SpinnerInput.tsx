import {Box} from "@main-components/Base";
import {checkInputSource} from '@main-components/Form';
import {BaseInput} from "@main-components/Form/inputs/BaseInput";
import BaseSpinnerInput from '@main-components/Form/inputs/SpinnerInput/components/BaseSpinnerInput';
import useFormFieldErrors from '@modules/_shared/domain/form/use-form-field-errors';
import useInput from '@modules/_shared/domain/form/useInput';
import React from 'react';
import {SpinnerInputProps} from './SpinnerInputProps';

function SpinnerInput({
    source,
    defaultValue,
    validate,
    ...rest
}: SpinnerInputProps) {
    checkInputSource({source});

    const {id, input, isRequired, meta, ref} = useInput({
        defaultValue: !!defaultValue ? defaultValue : rest.min,
        validate: validate,
        source: source as string
    });

    const {hasError, error} = useFormFieldErrors(source as string);

    return (
        <BaseInput
            label={rest.label}
            error={hasError ? error : undefined}
            helperText={rest.helperText}
            noMargin={rest.noMargin}
            WrapperComponent={Box}
            required={rest.required}
        >
            <BaseSpinnerInput
                onChange={input?.onChange}
                error={hasError ? error : undefined}
                value={input?.value}
                {...rest}
            />
        </BaseInput>
    );
}

SpinnerInput.propTypes = {};

SpinnerInput.defaultProps = {};

export default SpinnerInput;
