import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import * as React from 'react';
import { ProgressBar as BaseProgressBar } from 'react-native-paper';
import { ProgressBarProps } from './ProgressBarProps';

export function ProgressBar(props: ProgressBarProps) {
    const theme = useTheme();

    return (
        <BaseProgressBar
            progress={props.progress / 100}
            indeterminate={props.indeterminate}
            style={

                props.height
                    ? {
                        height: props.height,
                        borderRadius: props.borderRadius
                    }
                    : {
                        borderRadius: props.borderRadius
                    }
            }
            color={
                props.color
                    ? theme.colors[props.color]
                    : theme.colors['primaryMain']
            }
        />
    );
}
