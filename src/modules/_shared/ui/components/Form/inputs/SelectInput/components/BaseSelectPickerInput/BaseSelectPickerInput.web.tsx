import React, { useEffect, useState } from 'react';
import { BaseSelectPickerInputProps } from './BaseSelectPickerInputProps';
import { Autocomplete, TextField } from '@mui/material';
import { useTheme } from '@shared/ui/theme/AppTheme';
import SizingUtils from '@utils/misc/sizing-utils';
import { Box } from '@main-components/Base/Box';
import Text from '@main-components/Typography/Text';
import { Icon } from '@main-components/Base/Icon';

export default function BaseSelectPickerInput(
        props: BaseSelectPickerInputProps
) {
    const {
        value,
        onChange,
        orderValues,
        choices = [],
        placeholder = 'Selecciona',
        error,
        optionText,
        optionValue,
        multiple = false,
        searchPlaceholderText,
        hideSearch = false,
        loading,
        disabled,
        canClear = true,
        ...rest
    } = props;

    const finalOptionValue = optionValue ? optionValue : 'id';
    const finalOptionText = optionText ? optionText : 'name';
    const [selectedItems, setSelectedItems] = useState<any>(multiple ? [] : null);

    const onConfirm = (e, newValue) => {
        if (!newValue) {
            onChange(null);
            return;
        }
        onChange && onChange(multiple ? newValue?.map(v => v[finalOptionValue]) : newValue[finalOptionValue]);
    };

    useEffect(() => {
        if (!value) {
            setSelectedItems(multiple ? [] : null);
            return;
        }

        if (multiple) {
            setSelectedItems(choices.filter(v => {
                return (value ?? []).includes(v[finalOptionValue]);
            }));
            return;
        }

        setSelectedItems(choices.find(v => v[finalOptionValue] === value));

    }, [choices, value]);
    const theme = useTheme();

    return (
            <Autocomplete
                    multiple={props.multiple ?? false}
                    placeholder={props.placeholder}
                    value={orderValues ? orderValues(selectedItems) : selectedItems}
                    onChange={onConfirm}
                    disableClearable={!props.canClear}
                    options={choices}
                    getOptionSelected={(option, value) => {
                        return option[finalOptionValue] === value?.[finalOptionValue];
                    }}

                    clearIcon={
                        <Icon
                                name={'close'}
                                color={'greyMain'}
                                type={'ionicon'}
                                numberSize={SizingUtils.scale(10)}
                        />
                    }
                    popupIcon={
                        <Icon
                                name={'caret-down'}
                                color={'greyMain'}
                                type={'ionicon'}
                                numberSize={SizingUtils.scale(10)}
                        />
                    }
                    renderOption={(props, option, state) =>
                            <div  {...props}><Box p={'m'}><Text variant={'body'}>{option?.name}</Text></Box></div>}
                    getOptionLabel={(option) => option[finalOptionText]}
                    disabled={props.disabled}
                    renderInput={(params) => <TextField {...params}
                            placeholder={props.placeholder}
                            InputProps={{
                                ...params.InputProps,
                                style: {
                                    fontSize: theme.textVariants.body.fontSize,
                                    padding: 0,
                                    paddingLeft: theme.spacing.s,
                                    paddingRight: theme.spacing.s
                                    /*  height: 40*/
                                }
                            }}
                            fullWidth
                            style={{
                                height: SizingUtils.vscale(14),
                                borderRadius: 30
                            }}
                    />}

            />
    );

}
