import { Box } from '@main-components/Base/Box';
import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import * as React from 'react';
import { List } from 'react-native-paper';
import { ListItemProps } from './ListItemProps';
import { Platform } from 'react-native';

export function ListItem(props: ListItemProps) {
    const theme = useTheme();
    const right = props.right;
    return (
        <List.Item
            {...props}
            theme={{
                dark: false,
                fonts: {
                    regular: {
                        fontFamily: theme.textVariants.body.fontFamily
                    },
                    medium: {
                        fontFamily: theme.textVariants.body.fontFamily
                    },
                    light: {
                        fontFamily: theme.textVariants.body.fontFamily
                    }
                },
                colors: {
                    text: theme.colors.textColor
                }
            }}
            style={[props.style ?? {}, {
                paddingLeft: 0,
                ...(Platform.OS == 'web' && {
                    cursor: props.onPress ? 'pointer' : 'default'
                })
            }]}
            right={
                right
                    ? (props: any) => (
                        <Box
                            maxWidth={'50%'}
                            justifyContent='center'
                        >{right?.(props)}</Box>
                    )
                    : undefined
            }
            titleStyle={[props.titleStyle ?? {}, {
                fontFamily: theme.textVariants.body.fontFamily
            }]}
            titleNumberOfLines={props.titleNumberOfLines}
            descriptionNumberOfLines={props.descriptionNumberOfLine}
        />
    );
}

interface ListItemIconProps {
    icon: any;
}

export function ListItemIcon(props: ListItemIconProps) {
    return <List.Icon icon={props.icon} />;
}
