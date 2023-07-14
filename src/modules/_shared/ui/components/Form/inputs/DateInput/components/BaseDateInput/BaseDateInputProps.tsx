import { BaseTextInputProps } from '@main-components/Form/inputs/TextInput/components/BaseTextInput/BaseTextInputProps';

export interface BaseDateInputProps extends Omit<BaseTextInputProps, 'value'> {
    value?: Date;
    minDate?: Date;
    maxDate?: Date;
}
