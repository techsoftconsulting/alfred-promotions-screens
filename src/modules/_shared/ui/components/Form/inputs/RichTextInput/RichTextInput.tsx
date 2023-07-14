import {checkInputSource} from '@main-components/Form';
import {BaseInput} from "@main-components/Form/inputs/BaseInput";
import BaseRichTextInput from "@main-components/Form/inputs/RichTextInput/components/BaseRichTextInput";
import useFormFieldErrors from '@modules/_shared/domain/form/use-form-field-errors';
import useInput from '@modules/_shared/domain/form/useInput';
import * as React from 'react';
import {RichTextInputProps} from './RichTextInputProps';

export default function RichTextInput({
    label,
    onBlur,
    onFocus,
    onChange,
    source,
    multiline,
    defaultValue,
    validate,
    ...rest
}: RichTextInputProps) {
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
            <BaseRichTextInput
                {...rest}
                onChangeText={(text) =>
                    rest.filterText
                        ? input?.onChange(rest.filterText(text))
                        : input?.onChange(text)
                }
                value={input?.value}
                onBlur={input?.onBlur}
                onFocus={onFocus}
                label={label}
            />
        </BaseInput>
    );
}

RichTextInput.defaultProps = {};

