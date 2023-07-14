import { BaseTextInputProps } from '@main-components/Form/inputs/TextInput/components/BaseTextInput/BaseTextInputProps';

export interface BaseTimeInputProps extends Omit<BaseTextInputProps, 'value'> {
    value?: Date;
    is24Hour?: boolean;
}
