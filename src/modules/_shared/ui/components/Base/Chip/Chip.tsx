import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import * as React from 'react';
import { Chip as BaseChip } from 'react-native-paper';
import { ChipProps } from './ChipProps';

export function Chip(props: ChipProps) {
    const theme = useTheme();

    return (
            <BaseChip
                    style={{
                        backgroundColor: theme.colors[props.color || 'primaryMain'],
                        width: props.width ?? undefined,
                        display: 'inline-flex',
                        borderRadius: props.radius ?? undefined,
                        ...props.style ?? {}
                    }}
                    textStyle={{
                        alignItems: 'center',
                        color: theme.colors[props.textColor || 'primaryContrastText'],
                        fontFamily: theme.textVariants.body.fontFamily,
                        ...props.textStyle ?? {}
                    }}
                    onPress={props.onPress}
                    icon={props.icon}
                    onClose={props.onClose}
            >
                {props.label}
            </BaseChip>
    );
}
