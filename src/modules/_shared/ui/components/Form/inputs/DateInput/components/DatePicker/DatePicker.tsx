import DateTimeUtils from '@utils/misc/datetime-utils';
import * as React from 'react';
import { Platform } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { DatePickerProps } from './DatePickerProps';

export default function DatePicker(props: DatePickerProps) {
    const onChange = (selectedDate) => {
        const currentDate = DateTimeUtils.utc(selectedDate);
        props.onClose && props.onClose();
        props.onChange && props.onChange(currentDate);
    };

    const value = typeof props.value === 'string' ? new Date(props.value) : null;

    return (
        <>
            <DateTimePickerModal
                isVisible={props.show}
                onConfirm={(date) => {
                    props.onClose && props.onClose();
                    const currentDate = DateTimeUtils.utc(date);
                    props.onChange && props.onChange(currentDate);
                    props.onConfirm && props.onConfirm(currentDate);
                }}
                date={value ? value : new Date()}
                onCancel={() => props.onClose && props.onClose()}
                mode={props.mode as any}
                is24Hour={props.is24Hour}
                locale={
                    Platform.OS == 'ios'
                        ? props.is24Hour
                            ? 'en_GB'
                            : undefined
                        : undefined
                }
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={onChange}
                minimumDate={props.minDate}
                maximumDate={props.maxDate}
                timeZoneOffsetInMinutes={0}
                cancelTextIOS='Cancelar'
                confirmTextIOS='Confirmar'
            />
        </>
    );
}
