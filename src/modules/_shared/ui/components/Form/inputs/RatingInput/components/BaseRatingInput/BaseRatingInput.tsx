import { Rating } from '@main-components/Base/Rating';
import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';
import { BaseRatingInputProps } from './BaseRatingInputProps';

export default function BaseRatingInput(props: BaseRatingInputProps) {
    const theme = useTheme();
    return (
            <Rating
                    count={props.value || 0}
                    onFinish={(num) => {
                        props.onChange && props.onChange(num);
                    }}
                    isDisabled={props.disabled ?? false}
                    {...props}
            />
    );
}
