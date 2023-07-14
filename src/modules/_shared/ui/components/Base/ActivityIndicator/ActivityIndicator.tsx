import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';
import { ActivityIndicator as BaseActivityIndicator } from 'react-native-paper';
import { ActivityIndicatorProps } from './ActivityIndicatorProps';
import SizingUtils from '@utils/misc/sizing-utils';

export function ActivityIndicator(props: ActivityIndicatorProps) {
    const theme = useTheme();

    return (
            <BaseActivityIndicator
                    {...props}
                    size={SizingUtils.scale(25)}
                    color={theme.colors[props.color ?? 'primaryMain']}
            />
    );
}
