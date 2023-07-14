import {Box} from "@main-components/Base";
import {checkInputSource} from '@main-components/Form';
import {BaseInput} from "@main-components/Form/inputs/BaseInput";
import BaseRatingInput from '@main-components/Form/inputs/RatingInput/components/BaseRatingInput';
import useFormFieldErrors from '@modules/_shared/domain/form/use-form-field-errors';
import useInput from '@modules/_shared/domain/form/useInput';
import React from 'react';
import {RatingInputProps} from './RatingInputProps';

function RatingInput({
    source,
    defaultValue,
    validate,
    ...rest
}: RatingInputProps) {
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
            label={rest.label}
            helperText={rest.helperText}
            noMargin={rest.noMargin}
            WrapperComponent={Box}
            required={rest.required}
        >
            <BaseRatingInput
                onChange={input?.onChange}
                error={hasError ? error : undefined}
                value={input?.value}
                {...rest}
            />
        </BaseInput>
    );
}

RatingInput.propTypes = {};

RatingInput.defaultProps = {};

export default RatingInput;
