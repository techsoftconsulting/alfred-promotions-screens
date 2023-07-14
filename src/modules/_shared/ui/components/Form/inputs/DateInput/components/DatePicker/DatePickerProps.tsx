export interface DatePickerProps {
    mode: 'date' | 'time' | 'datetime' | 'inline' | 'countdown';
    value: Date;
    is24Hour?: boolean;
    onChange?: any;
    show?: boolean;
    onClose?: any;
    minDate?: Date;
    maxDate?: Date;
    onConfirm?: (date: any) => any;
    showUnderline?: boolean;
    disabled?: boolean;
}
