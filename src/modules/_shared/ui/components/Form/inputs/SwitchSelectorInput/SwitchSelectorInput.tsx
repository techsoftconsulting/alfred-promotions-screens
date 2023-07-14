import { BaseInput } from '@main-components/Form/inputs/BaseInput';
import useFormFieldErrors from '@modules/_shared/domain/form/use-form-field-errors';
import useChoices from '@modules/_shared/domain/form/useChoices';
import useInput from '@modules/_shared/domain/form/useInput';
import React, { useCallback } from 'react';
import { checkInputSource } from '../..';
import { SwitchSelectorInputProps } from './SwitchSelectorInputProps';
import SwitchSelector from '@main-components/Base/SwitchSelector';
import { Box } from '@main-components/Base';
import { useTheme } from '@shared/ui/theme/AppTheme';

function SwitchSelectorInput({
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
}: SwitchSelectorInputProps) {
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

    const theme = useTheme();

    const valueIndex = choices?.findIndex(e => e.value === input?.value) ?? 0;
    return (
        <BaseInput
            error={hasError ? error : undefined}
            label={rest.label}
            helperText={rest.helperText}
            noMargin={rest.noMargin}
            required={rest.required}
            WrapperComponent={Box}
            bg={rest.bg}
        >
            {/*<BaseSelectPickerInput
                {...rest}
                canClear={canClear ?? true}
                onChange={handleChange}
                choices={finalChoices}
                value={input?.value}
                optionText='name'
                optionValue='id'
            />*/}

            <SwitchSelector
                {...rest}
                onPress={(value) => {
                    handleChange(value);
                }}
                style={{
                    textColor: theme.colors.secondaryMain,
                    selectedColor: theme.colors.white,
                    buttonColor: theme.colors.secondaryMain,
                    borderColor: theme.colors.secondaryMain,
                    hasPadding: true,
                    buttonMargin: 1,
                    height: 34
                }}
                options={choices}
                initial={valueIndex}
                value={valueIndex}
            />
        </BaseInput>
    );
}

export default SwitchSelectorInput;
