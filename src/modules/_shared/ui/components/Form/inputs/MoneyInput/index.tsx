import * as React from 'react';
import { TextInputProps } from '../TextInput';
import { Theme } from '@shared/ui/theme/AppTheme';
import BaseMoneyInput from '@main-components/Form/inputs/MoneyInput/components/BaseMoneyInput';
import { BaseInput } from '@main-components/Form/inputs/BaseInput';
import { checkInputSource } from '@main-components/Form/Form';
import useInput from '@shared/domain/form/useInput';
import useFormFieldErrors from '@shared/domain/form/use-form-field-errors';

function MoneyInput({
    label,
    onBlur,
    onFocus,
    onChange,
    source,
    multiline,
    defaultValue,
    wrapper,
    validate,
    ...rest
}: Omit<TextInputProps, 'value'> & {
    source?: string;
    value?: number;
    ref?: any;
    meta?: any;
    onChange?: any;
    validate?: any;
    minValue?: number;
    prefix?: string;
    disabled?: boolean;
    bg?: keyof Theme['colors'];
}) {

    checkInputSource({ source });

    const { id, input, isRequired, meta } = useInput({
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
                <BaseMoneyInput
                        {...rest}
                        prefix={rest.prefix}
                        onBlur={input?.onBlur}
                        onFocus={onFocus}
                        value={input.value}
                        onChangeText={(text) => {
                            if (!input.onChange) return;
                            rest.filterText
                                    ? input.onChange(rest.filterText(text))
                                    : input.onChange(text);
                            onChange?.(text);
                        }}
                        error={meta?.invalid ? error : undefined}
                        label={label}
                />
            </BaseInput>
    );
}

export default MoneyInput;
