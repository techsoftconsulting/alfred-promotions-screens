import {Box} from '@main-components/Base/Box';
import {checkInputSource} from '@main-components/Form';
import useFormFieldErrors from '@modules/_shared/domain/form/use-form-field-errors';
import useInput from '@modules/_shared/domain/form/useInput';
import {useTheme} from '@modules/_shared/ui/theme/AppTheme';
import {get} from 'lodash';
import * as React from 'react';
import {useCallback} from 'react';
import {CheckboxGroupInputProps} from './CheckboxGroupInputProps';
import CheckboxGroupInputItem from './item';
import {BaseInput} from "@main-components/Form/inputs/BaseInput";

function CheckboxGroupInput(props: CheckboxGroupInputProps) {
    const theme = useTheme();

    const {
        choices = [],
        helperText,
        label,
        optionText,
        optionValue,
        row,
        source,
        translateChoice,
        validate,
        defaultValue,
        ...rest
    } = props;

    checkInputSource({source});

    const {id, input, isRequired, meta, ref} = useInput({
        defaultValue: defaultValue,
        validate: validate,
        source: props.source as string
    });

    const {hasError, error} = useFormFieldErrors(props.source as string);

    const handleCheck = useCallback(
        (e) => {
            let newValue = e.value;

            const isChecked = !!e.checked;

            if (isChecked) {
                input?.onChange([...(input?.value || []), ...[newValue]]);
            } else {
                input?.onChange(input?.value.filter((v) => v != newValue));
            }
            input?.onBlur();
        },
        [input?.onChange, input?.onBlur, input?.value]
    );

    return (
        <BaseInput
            error={error ? error : undefined}
            label={label}
            helperText={props.helperText}
            WrapperComponent={Box}
            required={rest.required}
        >
            <Box flexDirection={props.row ? 'row' : undefined}>
                {choices.map((choice: any) => (
                    <CheckboxGroupInputItem
                        key={`checkbox-${source}-${get(
                            choice,
                            optionValue as string
                        )}`}
                        choice={choice}
                        onChange={handleCheck}
                        optionText={optionText}
                        optionValue={optionValue}
                        translateChoice={translateChoice}
                        value={input?.value}
                        disabled={props.disabled}
                    />
                ))}
            </Box>
        </BaseInput>
    );
}

CheckboxGroupInput.defaultProps = {
    choices: [],
    optionText: 'name',
    optionValue: 'id',
    translateChoice: true,
    fullWidth: true,
    row: false
};

export default CheckboxGroupInput;
