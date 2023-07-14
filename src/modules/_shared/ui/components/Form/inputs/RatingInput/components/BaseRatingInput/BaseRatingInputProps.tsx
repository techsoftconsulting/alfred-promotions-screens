import { RatingProps } from '@main-components/Base/Rating';

export interface BaseRatingInputProps
    extends Omit<RatingProps, 'onFinish' | 'isDisabled' | 'count'> {
    value?: number;
    disabled?: boolean;
    onChange?: (num: any) => void;
    error?: string;
    label?: any;
    helperText?: string;
}
