import BaseCheckboxItemInput from '@main-components/Form/inputs/CheckboxInput/components/BaseCheckboxItemInput';
import useChoices, {
    OptionText
} from '@modules/_shared/domain/form/useChoices';
import * as React from 'react';

interface CheckboxGroupInputItemProps {
    choice: any;
    optionText?: OptionText;
    optionValue?: string;
    source?: string;
    onChange: any;
    value?: any;
    translateChoice?: boolean;
    disabled?: boolean;
}

export default function CheckboxGroupInputItem(
    props: CheckboxGroupInputItemProps
) {
    const {
        choice,
        onChange,
        optionText,
        optionValue,
        translateChoice,
        value,
        ...rest
    } = props;

    const { getChoiceText, getChoiceValue } = useChoices({
        optionText,
        optionValue,
        translateChoice
    });

    const choiceName = getChoiceText(choice);

    const isChecked = value
        ? value.find((v) => v == getChoiceValue(choice)) !== // eslint-disable-line
          undefined
        : false;

    let currentValue = getChoiceValue(choice);

    return (
        <BaseCheckboxItemInput
            key={'checkbox-op' + getChoiceValue(choice)}
            onChange={(e) => {
                onChange({
                    checked: !!e,
                    value: currentValue
                });
            }}
            checked={isChecked}
            value={isChecked}
            {...rest}
            title={choiceName}
        />
    );
}
