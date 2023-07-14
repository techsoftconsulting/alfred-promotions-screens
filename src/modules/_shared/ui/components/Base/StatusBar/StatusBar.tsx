import {useTheme} from '@modules/_shared/ui/theme/AppTheme';
import Constants from 'expo-constants';
import {StatusBar as BaseStatusBar} from 'expo-status-bar';
import React from 'react';
import {StatusBarProps} from './StatusBarProps';

export const StatusBar = React.forwardRef((props: StatusBarProps, ref) => {
    const theme = useTheme();

    return (
        <BaseStatusBar
            {...props}
            ref={ref}
            animated={props.animated}
            backgroundColor={props.color && theme.colors[props.color]}
        />
    );
})

export const statusBarHeight = Constants.statusBarHeight;
