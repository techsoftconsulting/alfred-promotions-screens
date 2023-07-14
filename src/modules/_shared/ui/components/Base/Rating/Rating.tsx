import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';
import { AirbnbRating as BaseRating } from 'react-native-elements';
import { RatingProps } from './RatingProps';

export function Rating({
    count,
    iconSize = 15,
    onFinish,
    isDisabled,
    ...rest
}: RatingProps) {
    const theme = useTheme();

    return (
            <BaseRating
                    showRating={false}
                    count={5}
                    defaultRating={count}
                    onFinishRating={onFinish}
                    size={iconSize}
                    unSelectedColor={theme.colors.greyMedium}
                    isDisabled={isDisabled}
                    {...rest}
                    selectedColor={rest.selectedColor ? theme.colors[rest.selectedColor] : theme.colors.warningMain}
            />
    );
}
