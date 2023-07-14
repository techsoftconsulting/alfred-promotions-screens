import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';
import BaseCircularProgress from 'react-native-circular-progress-indicator';
import { CircularProgressProps } from './CircularProgressProps';

export function CircularProgress(props: CircularProgressProps) {
    const theme = useTheme();

    return (
        <BaseCircularProgress
            value={props.value}
            radius={props.radius}
            duration={2000}
            textColor={theme.colors[props.textColor ?? 'black']}
            inActiveStrokeColor={'rgba(0,0,0,.2)'}
            activeStrokeColor={
                theme.colors[props.activeStrokeColor ?? 'primaryMain']
            }
            maxValue={100}
            valueSuffix={'%'}
        />
    );
}
