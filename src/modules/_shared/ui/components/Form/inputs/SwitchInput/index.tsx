import * as React from 'react';
import { BaseInput } from '@main-components/Form/inputs/BaseInput';
import { checkInputSource } from '@main-components/Form/Form';
import useInput from '@shared/domain/form/useInput';
import useFormFieldErrors from '@shared/domain/form/use-form-field-errors';
import BaseSwitchInput, {
    BaseSwitchInputProps
} from '@main-components/Form/inputs/SwitchInput/components/BaseSwitchInput';
import { Box } from '@main-components/Base';

function SwitchInput({
    label,
    onChange,
    source,
    validate,
    wrapper,
    defaultValue,
    onFocus,
    ...rest
}: BaseSwitchInputProps & {
    source?: string;
    ref?: any;
    meta?: any;
    onChange?: any;
    validate?: any;

}) {
    checkInputSource({ source });

    const { id, input } = useInput({
        defaultValue: defaultValue,
        validate: validate,
        source: source as string
    });

    const { hasError, error } = useFormFieldErrors(source as string);


    return (
            <BaseInput
                    label={label}
                    WrapperComponent={Box}
                    error={hasError ? error : undefined}
                    helperText={rest.helperText}
                    noMargin={rest.noMargin}
                    required={rest.required}
                    bg={rest.bg}
            >
                <BaseSwitchInput
                        {...rest}
                        label={label}
                        value={input?.value}
                        onChange={input?.onChange}
                        onBlur={input?.onBlur}
                        onFocus={onFocus}

                />
            </BaseInput>
    );
}

SwitchInput.defaultProps = {};

export default SwitchInput;
