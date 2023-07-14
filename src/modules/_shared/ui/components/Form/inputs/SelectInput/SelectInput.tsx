import { BaseInput } from '@main-components/Form/inputs/BaseInput';
import BaseSelectPickerInput from '@main-components/Form/inputs/SelectInput/components/BaseSelectPickerInput';
import useFormFieldErrors from '@modules/_shared/domain/form/use-form-field-errors';
import useChoices from '@modules/_shared/domain/form/useChoices';
import useInput from '@modules/_shared/domain/form/useInput';
import React, { useCallback } from 'react';
import { SelectInputProps } from './SelectInputProps';
import { checkInputSource } from '@main-components/Form/Form';

function SelectInput({
    source,
    optionText,
    optionValue,
    translateChoice,
    validate,
    choices,
    defaultValue,
    onChange,
    canClear = true,
    WrapperComponent,
    ...rest
}: SelectInputProps) {
    checkInputSource({ source });

    const { id, input, isRequired, meta, ref } = useInput({
        defaultValue: defaultValue,
        validate: validate,
        source: source as string
    });

    const { hasError, error } = useFormFieldErrors(source as string);

    const { getChoiceText, getChoiceValue } = useChoices({
        optionText,
        optionValue,
        translateChoice
    });

    const getItemOptionText = useCallback((choice) => getChoiceText(choice), [
        getChoiceText
    ]);

    const handleChange = async (value: any) => {
        input && input.onChange && input.onChange(value);

        onChange && onChange(value);
    };

    const finalChoices = choices?.map((item) => ({
        id: getChoiceValue(item),
        name: getItemOptionText(item)
    }));

    return (
            <BaseInput
                    error={hasError ? error : undefined}
                    label={rest.label}
                    helperText={rest.helperText}
                    noMargin={rest.noMargin}
                    required={rest.required}
                    WrapperComponent={WrapperComponent}
                    bg={rest.bg}
            >
                <BaseSelectPickerInput
                        {...rest}
                        canClear={canClear ?? true}
                        onChange={handleChange}
                        choices={finalChoices}
                        value={input?.value}
                        optionText='name'
                        optionValue='id'
                />
            </BaseInput>
    );
}

export default SelectInput;
