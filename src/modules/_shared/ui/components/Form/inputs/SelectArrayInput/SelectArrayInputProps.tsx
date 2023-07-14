import { OptionText } from '@modules/_shared/domain/form/useChoices';
import { BaseInputProps } from '@main-components/Form/inputs/BaseInput/BaseInputProps';

export type SelectArrayInputProps = BaseInputProps & {
    translateChoice?: boolean;
    choices?: any[];
    optionText?: OptionText;
    optionValue?: string;
    onChange?: any;
    orderValues?: any;
};
