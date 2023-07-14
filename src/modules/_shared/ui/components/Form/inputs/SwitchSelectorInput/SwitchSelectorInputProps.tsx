import { OptionText } from '@modules/_shared/domain/form/useChoices';
import { Theme } from '@modules/_shared/ui/theme/AppTheme';
import { BaseInputProps } from '@main-components/Form/inputs/BaseInput/BaseInputProps';

export type SwitchSelectorInputProps = BaseInputProps & {
    translateChoice?: boolean;
    choices?: any[];
    mode?: 'dialog' | 'dropdown';
    optionText?: OptionText;
    optionValue?: string;
    onChange?: any;
    canClear?: boolean;
    textColor?: keyof Theme['colors'];
    WrapperComponent?: any
};
