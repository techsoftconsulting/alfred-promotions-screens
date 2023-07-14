import BaseRadioInput from '@main-components/Form/inputs/RadioButtonGroupInput/components/BaseRadioInput';
import useChoices, { OptionText } from '@modules/_shared/domain/form/useChoices';
import * as React from 'react';

interface RadioButtonGroupInputItemProps {
    choice: any;
    optionText?: OptionText;
    optionValue?: string;
    source?: string;
    onChange: any;
    value?: any;
    translateChoice?: boolean;
    disabled?: boolean;
    renderChoiceText?: any;
}

function RadioButtonGroupInputItem({
    choice,
    optionText,
    optionValue,
    source,
    onChange,
    value = undefined,
    translateChoice = false,
    renderChoiceText,
    disabled
}: RadioButtonGroupInputItemProps) {
    const { getChoiceText, getChoiceValue } = useChoices({
        optionText,
        optionValue,
        translateChoice
    });
    const label = getChoiceText(choice);
    const choiceValue = getChoiceValue(choice);
    const nodeId = `${source}_${choiceValue}`;

    return (
        <BaseRadioInput
            id={nodeId}
            color='primaryMain'
            uncheckedColor='greyMain'
            onChange={(isChecked: boolean) => {
                return onChange(isChecked ? choiceValue : undefined);
            }}
            value={choiceValue}
            title={label}
            choice={choice}
            checked={value === choiceValue}
            disabled={disabled}
            renderChoiceText={renderChoiceText}
        />
    );
}

export default RadioButtonGroupInputItem;
