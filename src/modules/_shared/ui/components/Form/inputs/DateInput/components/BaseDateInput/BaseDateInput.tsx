import { useUtils } from '@modules/_shared/domain/hooks/use-utils';
import React, { useState } from 'react';
import BaseTextInput from '../../../TextInput/components/BaseTextInput';
import DatePicker from '../DatePicker';
import { BaseDateInputProps } from './BaseDateInputProps';
import TouchableOpacity from '@main-components/Utilities/TouchableOpacity';

const initialDate = new Date();
export default function BaseDateInput(props: BaseDateInputProps) {
    const [showPicker, setShowPicker] = useState(false);
    const { date: DateUtils } = useUtils();

    const date = props.value;

    return (
        <>
            <TouchableOpacity
                onPress={() => {
                    setShowPicker(true);
                }}
            >
                <BaseTextInput
                    {...props}
                    value={date && DateUtils.format(date, 'YYYY-MM-DD')}
                    placeholder={props.placeholder ?? 'YYYY/MM/DD'}
                    pointerEvents={'none'}
                />
            </TouchableOpacity>

            <DatePicker
                show={showPicker}
                onClose={() => setShowPicker(false)}
                onChange={(date) => {
                    setShowPicker(false);
                    props.onChangeText && props.onChangeText(date);
                }}
                value={date}
                mode='date'
                minDate={props.minDate}
                maxDate={props.maxDate}
            />
        </>
    );
}
