import DatePicker from '@main-components/Form/inputs/DateInput/components/DatePicker';
import React from 'react';
import { BaseTimeInputProps } from './BaseTimeInputProps';

const initialDate = new Date();

export default function BaseTimeInput(props: BaseTimeInputProps) {
    const date = props.value;

    return (
        <DatePicker
            {...props}
            show={true}
            onChange={(date) => {
                props.onChangeText && props.onChangeText(date);
            }}
            value={date}
            mode='time'
            is24Hour={props.is24Hour ?? true}
        />
    );
}
