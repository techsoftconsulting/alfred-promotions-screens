import {Box} from '@main-components/Base/Box';
import {checkInputSource} from '@main-components/Form';
import useFormFieldErrors from '@modules/_shared/domain/form/use-form-field-errors';
import useInput from '@modules/_shared/domain/form/useInput';
import * as React from 'react';
import {ValidationCodeInputProps} from './ValidationCodeInputProps';
import BaseValidationCodeInput
    from "@main-components/Form/inputs/ValidationCodeInput/components/BaseValidationCodeInput/BaseValidationCodeInput";

function ValidationCodeInput({
    label,
    onBlur,
    onFocus,
    onChange,
    source,
    defaultValue,
    validate,
    ...rest
}: ValidationCodeInputProps & {
    source?: string;
    ref?: any;
    meta?: any;
    onChange?: any;
    validate?: any;
}) {
    checkInputSource({source});

    const {id, input, isRequired, meta, ref} = useInput({
        defaultValue: defaultValue,
        validate: validate,
        source: source as string
    });

    const {hasError, error} = useFormFieldErrors(source as string);


    return (
        <Box
            mb={{
                large: "l",
            }}
            style={[rest.style]}
        >
            <BaseValidationCodeInput
                error={hasError ? error : undefined}
                code={input?.value}
                onInputComplete={input?.onChange}
                {...rest}
            />
        </Box>
    );
}

ValidationCodeInput.defaultProps = {};

export default ValidationCodeInput;
