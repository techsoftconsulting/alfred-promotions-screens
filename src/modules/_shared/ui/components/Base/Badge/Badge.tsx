import { Box } from '@main-components/Base/Box';
import Text from '@main-components/Typography/Text';
import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';
import { BadgeProps } from './BadgeProps';

export function Badge({ textColor = 'white', ...props }: BadgeProps) {
    const theme = useTheme();

    return (
        <Box
            bg={props.color ?? 'primaryMain'}
            borderRadius={20}
            padding='s'
            justifyContent='center'
            alignItems='center'
            paddingHorizontal={'m'}
            style={{  paddingVertical: 6,  ...props.containerStyle ?? {}}}
        >
            <Text
                variant='small'
                color={textColor} {...props.titleTextProps}>
                {props.title}
            </Text>
        </Box>
    );
}
