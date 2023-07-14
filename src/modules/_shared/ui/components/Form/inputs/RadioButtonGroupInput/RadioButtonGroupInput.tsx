import { checkInputSource } from '@main-components/Form/Form';
import useInput from '@modules/_shared/domain/form/useInput';
import get from 'lodash/get';
import * as React from 'react';
import RadioButtonGroupInputItem from './item';
import { RadioButtonGroupInputProps } from './RadioButtonGroupInputProps';
import { BaseInput } from '@main-components/Form/inputs/BaseInput';
import useFormFieldErrors from '@shared/domain/form/use-form-field-errors';
import { Box } from '@main-components/Base';

function RadioButtonGroupInput(props: RadioButtonGroupInputProps) {
    const {
        choices = [],
        helperText,
        label,
        optionText,
        optionValue = 'id',
        row,
        source,
        validate,
        defaultValue,
        disabled,
        renderChoiceText,
        ...rest
    } = props;

    checkInputSource(props);

    const { id, input, isRequired, meta, ref } = useInput({
        defaultValue: defaultValue,
        validate: validate,
        source: source as string
    });

    const { hasError, error } = useFormFieldErrors(source as string);

    return (
            <BaseInput
                    error={hasError ? error : undefined}
                    label={props.label}
                    helperText={props.helperText}
                    WrapperComponent={Box}
                    required={rest.required}
            >
                <Box
                        flexDirection={props.row ? 'row' : 'column'}
                >
                    {choices.map((choice) => (
                            <RadioButtonGroupInputItem
                                    onChange={input?.onChange}
                                    value={input?.value}
                                    key={`radio-${source}-${get(choice, optionValue)}`}
                                    choice={choice}
                                    optionText={optionText}
                                    optionValue={optionValue}
                                    source={source}
                                    disabled={disabled}
                                    renderChoiceText={renderChoiceText}
                            />
                    ))}
                </Box>
            </BaseInput>
    );
}

RadioButtonGroupInput.defaultProps = {
    choices: [],
    optionText: 'name',
    optionValue: 'id',
    row: true,
    translateChoice: true
};

export default RadioButtonGroupInput;
