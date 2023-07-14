import { BaseRatingInputProps } from '@main-components/Form/inputs/RatingInput/components/BaseRatingInput';
import { BaseInputProps } from '@main-components/Form/inputs/BaseInput/BaseInputProps';

export type RatingInputProps = Omit<BaseRatingInputProps, 'value'> &
    BaseInputProps;
