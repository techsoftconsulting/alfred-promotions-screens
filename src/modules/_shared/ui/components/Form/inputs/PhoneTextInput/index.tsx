import * as React from 'react';
import BasePhoneTextInput, {
    BasePhoneTextInputProps
} from '@main-components/Form/inputs/PhoneTextInput/components/BasePhoneTextInput';
import { checkInputSource } from '@main-components/Form/Form';
import useInput from '@shared/domain/form/useInput';
import useFormFieldErrors from '@shared/domain/form/use-form-field-errors';
import { BaseInput } from '@main-components/Form/inputs/BaseInput';

export type PhoneTextInputProps = BasePhoneTextInputProps;

function PhoneTextInput({
    label,
    onBlur,
    onFocus,
    onChange,
    source,
    wrapper,
    validate,
    defaultValue,
    ...rest
}: PhoneTextInputProps & {
    source?: string;
    meta?: any;
    onChange?: any;
    validate?: any;
}) {
    const propsValidation = validate
            ? typeof validate === 'object'
                    ? [...validate]
                    : [validate]
            : [];

    const baseValidate = [...propsValidation];

    checkInputSource({ source });

    const { id, input, isRequired, meta, ref } = useInput({
        defaultValue: defaultValue,
        validate: validate,
        source: source as string
    });

    const { hasError, error } = useFormFieldErrors(source as string);

    return (
            <BaseInput
                    label={label}
                    WrapperComponent={wrapper as any}
                    error={hasError ? error : undefined}
                    helperText={rest.helperText}
                    noMargin={rest.noMargin}
                    required={rest.required}
                    bg={rest.bg}
            >
                <BasePhoneTextInput
                        {...rest}
                        value={input?.value}
                        defaultValue={defaultValue}
                        onBlur={input.onBlur}
                        onFocus={onFocus}
                        source={source}
                        onChangeText={(text) => {
                            rest.filterText
                                    ? input?.onChange(rest.filterText(text))
                                    : input?.onChange(text);
                        }}
                        error={meta?.invalid ? error : undefined}
                        label={label}
                        validate={baseValidate}
                />
            </BaseInput>
    );
}

PhoneTextInput.defaultProps = {};

export default PhoneTextInput;
