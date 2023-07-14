import DatePicker from '@main-components/Form/inputs/DateInput/components/DatePicker';
import {useUtils} from '@modules/_shared/domain/hooks/use-utils';
import React, {useState} from 'react';
import BaseTextInput from '../../../TextInput/components/BaseTextInput';
import {BaseTimeInputProps} from './BaseTimeInputProps';
import {TouchableOpacity} from "react-native";

const initialDate = new Date();
export default function BaseTimeInput(props: BaseTimeInputProps) {
    const [showPicker, setShowPicker] = useState(false);

    const {date: DateUtils} = useUtils();
    const date = DateUtils.utc(props.value || initialDate);

    return (
        <>
            <TouchableOpacity
                disabled={props.disabled}
                onPress={() => setShowPicker(true)}
            >
                <BaseTextInput
                    {...props}
                    value={date && DateUtils.format(date, 'HH:mm')}
                    pointerEvents={'none'}
                />
            </TouchableOpacity>
            <DatePicker
                show={showPicker}
                onClose={() => setShowPicker(false)}
                onChange={(date) => {
                    props.onChangeText && props.onChangeText(date);
                }}
                value={date}
                mode="time"
                is24Hour={props.is24Hour ?? true}
            />
        </>
    );
}
