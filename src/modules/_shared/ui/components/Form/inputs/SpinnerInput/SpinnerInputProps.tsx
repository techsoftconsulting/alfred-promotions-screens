import { BaseSpinnerInputProps } from '@main-components/Form/inputs/SpinnerInput/components/BaseSpinnerInput';
import { BaseInputProps } from '@main-components/Form/inputs/BaseInput/BaseInputProps';

export type SpinnerInputProps = Omit<BaseSpinnerInputProps, 'value'> &
    BaseInputProps;
