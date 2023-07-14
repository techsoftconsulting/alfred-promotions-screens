import { checkInputSource } from '@main-components/Form/Form';
import { BaseInput } from '@main-components/Form/inputs/BaseInput';
import BaseImageInput from '@main-components/Form/inputs/ImageInput/components/BaseImageInput';
import useFormFieldErrors from '@modules/_shared/domain/form/use-form-field-errors';
import useInput from '@modules/_shared/domain/form/useInput';
import * as React from 'react';
import {
    BaseImageInputProps
} from '@main-components/Form/inputs/ImageInput/components/BaseImageInput/BaseImageInputProps';
import { BaseInputProps } from '@main-components/Form/inputs/BaseInput/BaseInputProps';
import { Box } from '@main-components/Base/Box';

export type ImageInputProps = BaseImageInputProps & BaseInputProps;

function ImageInput({
    label,
    defaultValue,
    source,
    validate,
    ...rest
}: ImageInputProps & {
    source?: string;
    ref?: any;
    meta?: any;
    onChange?: any;
    validate?: any;
}) {
    checkInputSource({ source });

    const { id, input, isRequired, meta, ref } = useInput({
        defaultValue: defaultValue,
        validate: validate,
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
                <BaseImageInput
                        initialImage={input?.value}
                        {...rest}
                        onChange={(data) => {
                            rest?.onChange?.(data);
                            input.onChange(data);
                        }}
                />
            </BaseInput>
    );
}

ImageInput.defaultProps = {};

export default ImageInput;
