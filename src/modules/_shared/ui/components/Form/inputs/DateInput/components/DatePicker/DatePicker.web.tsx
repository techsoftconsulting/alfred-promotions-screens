import AppTheme from '@modules/_shared/ui/theme/AppTheme';
import DateTimeUtils from '@utils/misc/datetime-utils';
import React, { createElement } from 'react';
import { DatePickerProps } from './DatePickerProps';
import { styled } from '@mui/system';

const Input = styled('input')({
    borderWidth: 0,
    backgroundColor: 'transparent',
    paddingInline: AppTheme.spacing.m,
    marginBlock: 0,
    fontFamily: AppTheme.textVariants.body.fontFamily,
    fontSize: AppTheme.textVariants.body.fontSize,
    outlineWidth: 0,
    color: AppTheme.colors.textColor,
    height: 38
});


export default function DatePicker({
    showUnderline = true,
    ...props
}: DatePickerProps) {
    const isDate = props.mode == 'date';

    return (
            <>
                {createElement(Input, {
                    type: props.mode == 'date' ? 'date' : 'time',
                    value: props.value ? DateTimeUtils.format(
                            props.value,
                            isDate ? 'YYYY-MM-DD' : 'HH:mm',
                            isDate ? true : false
                    ) : null,
                    min: !isDate && '00:00',
                    max: !isDate && '23:59',
                    disabled: props.disabled,
                    className: `${showUnderline ? '' : 'no-border'} `,
                    onChange: (e) => {
                        const value = e.target.value;

                        const date = isDate
                                ? DateTimeUtils.getDateOnly(DateTimeUtils.fromString(value))
                                : DateTimeUtils.fromTime(value);

                        const currentDate = date; // DateTimeUtils.utc(date);
                        props.onClose && props.onClose();
                        props.onChange && props.onChange(value !== '' ? currentDate : null);
                    }
                })}
            </>
    );
}
