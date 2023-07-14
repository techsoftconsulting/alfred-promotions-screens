import { Box } from '@main-components/Base';
import { checkInputSource } from '@main-components/Form/Form';
import { BaseInput } from '@main-components/Form/inputs/BaseInput';
import useInput from '@modules/_shared/domain/form/useInput';
import * as React from 'react';
import { CheckboxInputProps } from './CheckboxInputProps';
import BaseCheckboxItemInput from '@main-components/Form/inputs/CheckboxInput/components/BaseCheckboxItemInput';


function CheckboxInput({
    label,
    title,
    onBlur,
    onFocus,
    onChange,
    source,
    meta,
    error,
    ...rest
}: CheckboxInputProps) {
    checkInputSource({ source });

    const { id, input, isRequired, ref } = useInput({
        defaultValue: rest.defaultValue as boolean,
        validate: rest.validate,
        source: source as string
    });

    return (
            <BaseInput
                    error={error ? error : undefined}
                    label={undefined}
                    helperText={rest.helperText}
                    noMargin={rest.noMargin}
                    WrapperComponent={Box}
                    required={rest.required}
            >
                <BaseCheckboxItemInput
                        {...rest}
                        onChange={input.onChange}
                        title={label ?? title as any}
                        value={input.value as boolean}
                />
            </BaseInput>
    );
}

CheckboxInput.defaultProps = {};

export default CheckboxInput;
