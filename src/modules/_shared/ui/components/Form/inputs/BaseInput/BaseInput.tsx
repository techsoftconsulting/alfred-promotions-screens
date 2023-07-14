import React from 'react';
import FormField from '@modules/_shared/domain/form/FormField';
import InputLabel from '@main-components/Form/components/InputLabel';
import InputTextHelper from '@main-components/Form/components/InputTextHelper';
import { InputWrapperProps } from '@main-components/Form/components/InputWrapper/InputWrapperProps';
import { InputWrapper } from '@main-components/Form/components/InputWrapper';
import { Theme } from '@shared/ui/theme/AppTheme';

export function BaseInput({
    hidden = false,
    ...props
}: {
    label?: string | undefined;
    error?: string | undefined;
    errorColor?: keyof Theme['colors'],

    helperText?: string | undefined;
    children?: JSX.Element;
    WrapperComponent?: React.FC<InputWrapperProps>
    noMargin?: boolean;
    required?: boolean;
    bg?: keyof Theme['colors'];
    style?: any;
    hidden?: boolean
    header?: any

}) {
    const FieldWrapper = props.WrapperComponent ?? InputWrapper;

    return (
            <FormField noMargin={props.style ? true : props.noMargin}>
                <InputLabel
                        label={props.label}
                        hasError={!!props.error}
                        required={props.required}
                        errorColor={props.errorColor}
                />
                {props.header ? props.header : undefined}

                <FieldWrapper
                        bg={props.bg}
                        style={props?.style}
                        hasError={!!props.error}
                >
                    {props.children}
                </FieldWrapper>
                {
                        !hidden && (props.error || props.helperText) && (
                                <InputTextHelper
                                        error={props.error}
                                        helperText={props.helperText ?? ''}
                                />
                        )
                }
            </FormField>
    );
}
