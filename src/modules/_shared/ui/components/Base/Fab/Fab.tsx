import {useTheme} from '@modules/_shared/ui/theme/AppTheme';
import React, {useState} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import {FabProps} from './FabProps';

export function Fab({icon = 'plus', ...props}: FabProps) {
    const theme = useTheme();

    const [open, setOpen] = useState(false);
    if (props.actions) {
        return (
            <FAB.Group
                style={[styles.fab, props.style]}
                open={open}
                icon={icon}
                color={
                    props.textColor ? theme.colors[props.textColor] : undefined
                }
                theme={{
                    colors: {
                        backdrop: "transparent",
                        primary: theme.colors.primaryMain,
                        background: theme.colors.primaryMain,
                        accent: theme.colors.primaryMain
                    },
                    mode: 'adaptive',
                    fonts: {
                        regular: theme.textVariants.body
                    }
                }}
                actions={props.actions as any}
                onPress={() => {
                    if (open) {
                        setOpen(false);
                    }
                }}
                onStateChange={({open}) => {
                    setOpen(open);
                }}
                visible
                fabStyle={{
                    backgroundColor: theme.colors.primaryMain,
                    zIndex: 9999
                }}
            />
        );
    }

    return (
        <FAB
            style={[styles.fab, props.style]}
            small={props.small}
            icon={icon}
            color={props.textColor ? theme.colors[props.textColor] : undefined}
            theme={{
                colors: {
                    primary: theme.colors.primaryMain,
                    background: theme.colors.primaryMain,
                    accent: theme.colors.primaryMain
                },
                fonts: {
                    regular: theme.textVariants.body
                },
                mode: 'adaptive'
            }}
            onPress={props.onPress}
        />
    );
}

const styles = StyleSheet.create({
    fab: {
        position: Platform.OS == 'web' ? 'fixed' : 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        zIndex: 9999999999
    }
});
