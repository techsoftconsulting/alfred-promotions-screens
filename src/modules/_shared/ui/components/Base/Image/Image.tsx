import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';
import { Image as BaseImage } from 'react-native';
import { ImageProps } from './ImageProps';

export function Image({ showPlaceHolder = false, ...props }: ImageProps) {
    const theme = useTheme();

    return (
        <BaseImage
            {...props}
            /* transition={false}*/
            /* placeholderStyle={{
                 backgroundColor: showPlaceHolder
                     ? theme.colors.greyMain
                     : 'transparent'
             }}
             progressiveRenderingEnabled*/
        />
    );
}
