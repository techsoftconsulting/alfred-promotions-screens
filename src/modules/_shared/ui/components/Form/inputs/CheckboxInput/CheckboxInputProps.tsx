import {
    BaseCheckboxItemInputProps
} from '@main-components/Form/inputs/CheckboxInput/components/BaseCheckboxItemInput/BaseCheckboxItemInputProps';
import { BaseInputProps } from '@main-components/Form/inputs/BaseInput/BaseInputProps';

export type CheckboxInputProps = Omit<BaseCheckboxItemInputProps, 'checked'> &
    BaseInputProps & {
        label?: string;
        title?: string;
    };
