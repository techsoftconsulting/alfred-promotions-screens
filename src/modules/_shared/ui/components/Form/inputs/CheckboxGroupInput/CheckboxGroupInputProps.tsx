import { OptionText } from '@modules/_shared/domain/form/useChoices';
import { BaseInputProps } from '@main-components/Form/inputs/BaseInput/BaseInputProps';

export interface CheckboxGroupInputProps extends BaseInputProps {
    optionText?: OptionText;
    optionValue?: string;
    translateChoice?: boolean;
    row: boolean;
    choices?: any[];
}
