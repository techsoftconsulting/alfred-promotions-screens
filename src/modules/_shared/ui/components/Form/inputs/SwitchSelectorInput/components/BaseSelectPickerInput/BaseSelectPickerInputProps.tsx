import { OptionText } from '@modules/_shared/domain/form/useChoices';
import { Theme } from '@modules/_shared/ui/theme/AppTheme';

export interface BaseSelectPickerInputProps {
    value?: string;
    error?: string;
    onChange?: any;
    onTextChange?: any;
    textValue?: any;
    choices?: any[];
    placeholder?: string;
    style?: any;
    optionText?: OptionText;
    optionValue?: string;
    label?: any;
    helperText?: string;
    multiple?: boolean;
    searchPlaceholderText?: string;
    hideSearch?: boolean;
    loaded?: boolean;
    loading?: boolean;
    disabled?: boolean;
    canClear?: boolean;
    textColor?: keyof Theme['colors'];
}
