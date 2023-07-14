import ArrayUtils from '@modules/_shared/domain/utils/misc/array-utils';
import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { BaseSelectInputProps } from './BaseSelectInputProps';

export default function BaseSelectInput(props: BaseSelectInputProps) {
    const {
        ref,
        value,
        onChange,
        choices = [],
        mode,
        placeholder,
        error,
        optionText,
        optionValue,
        disabled,
        ...rest
    } = props;

    const finalOptionValue = optionValue ? optionValue : 'id';
    const finalOptionText = optionText ? optionText : 'name';

    const selectedItem = ArrayUtils.find(
        choices || [],
        (choice) => choice[finalOptionValue] === value
    );

    const theme = useTheme();

    return (
        <Picker
            selectedValue={selectedItem}
            enabled={!disabled}
            style={[
                props.style
                    ? props.style
                    : {
                        height: 50,
                        minWidth: 150,
                        borderRadius: 20
                    }
            ]}
            onValueChange={(itemValue, itemIndex) => {
                onChange(itemValue);
            }}
            mode={mode || 'dialog'}
        >
            {(!!!value || value === '') && (
                <Picker.Item
                    label={
                        placeholder || 'Por favor selecciona una opción'
                    }
                    value={undefined}
                    color='grey'
                />
            )}

            {choices.map((option) => (
                <Picker.Item
                    key={option[finalOptionValue]}
                    label={
                        optionText
                            ? typeof finalOptionText === 'function'
                                ? finalOptionText(option)
                                : option[finalOptionText as string]
                            : option.name
                    }
                    value={option}
                />
            ))}
        </Picker>
    );
}
