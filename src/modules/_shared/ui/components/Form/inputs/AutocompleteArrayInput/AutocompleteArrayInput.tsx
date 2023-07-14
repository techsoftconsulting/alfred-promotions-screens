import {BaseInput} from "@main-components/Form/inputs/BaseInput";
import BaseSelectPickerInput from '@main-components/Form/inputs/SelectInput/components/BaseSelectPickerInput';
import useFormFieldErrors from '@modules/_shared/domain/form/use-form-field-errors';
import useChoices from '@modules/_shared/domain/form/useChoices';
import useInput from '@modules/_shared/domain/form/useInput';
import React, {useCallback} from 'react';
import {checkInputSource} from '../..';
import {AutocompleteArrayInputProps} from './AutocompleteArrayInputProps';

export default function AutocompleteArrayInput({
    source,
    optionText = 'name',
    optionValue = 'id',
    translateChoice,
    validate,
    choices,
    defaultValue,
    onChange,
    ...rest
}: AutocompleteArrayInputProps) {
    checkInputSource({source});

    const {id, input, isRequired, meta, ref} = useInput({
        defaultValue: defaultValue,
        validate: validate,
        source: source as string
    });

    const {hasError, error} = useFormFieldErrors(source as string);

    const {getChoiceText, getChoiceValue} = useChoices({
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
            error={error ? error : undefined}
            label={rest.label}
            helperText={rest.helperText}
            noMargin={rest.noMargin}
            required={rest.required}
        >
            <BaseSelectPickerInput
                {...rest}
                onChange={handleChange}
                choices={finalChoices}
                value={input?.value}
                optionText="name" // already mapped in finalChoices
                optionValue="id" // already mapped in finalChoices
                multiple
            />
        </ BaseInput>
    );
}
