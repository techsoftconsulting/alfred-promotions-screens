import { OptionText } from '@modules/_shared/domain/form/useChoices';

export interface BaseSelectInputProps {
    value?: string;
    ref?: any;
    error?: string;
    onChange?: any;
    disabled?: boolean,
    choices?: any[];
    mode?: 'dialog' | 'dropdown';
    placeholder?: string;
    style?: any;
    optionText?: OptionText;
    optionValue?: string;
    label?: any;
    helperText?: string;
}
