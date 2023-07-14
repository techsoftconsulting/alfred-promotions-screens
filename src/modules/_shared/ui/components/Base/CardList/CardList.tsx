import { Card, CardActions, CardContent, CardTitle } from '@main-components/Base/Card';
import React, { useState } from 'react';
import { ListItem } from '../List';
import { CardListProps } from './CardListProps';
import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import { Pressable } from '@main-components/Utilities/Pressable';
import { Box, Icon } from '@main-components/Base';
import { Platform } from 'react-native';

export function CardList(props: CardListProps) {
    const theme = useTheme();
    return (
        <Card>
            <CardTitle title={props.title} />
            <CardContent>
                {props.items.map((item, idx) => (
                    <ListItem
                        key={idx}
                        {...item}
                        style={{
                            paddingVertical: theme.spacing.m,
                            borderBottomWidth: props.items.length - 1 == idx ? 0 : 1,
                            borderBottomColor: '#dee2e6'
                        }}
                    />
                ))}
            </CardContent>
            {props.renderFooter && (
                <CardActions>{props.renderFooter()}</CardActions>
            )}
        </Card>
    );
}

export function CardListItemValue({
    id,
    value,
    isEmpty,
    onEmptyPress
}: { value: any; isEmpty: boolean; onEmptyPress?: any, id: string }) {

    if (isEmpty || !value) {
        return (
            <CardListEmptyItemValue onPress={() => onEmptyPress?.(id)} />
        );
    }

    return value;
}

export function CardListEmptyItemValue({ onPress }) {
    const [isHoveredIn, setIsHoveredIn] = useState(false);

    return (
        <Pressable
            onHoverIn={() => setIsHoveredIn(true)}
            onHoverOut={() => setIsHoveredIn(false)}
            onPress={onPress}
            style={({ pressed }) => [
                {
                    opacity: pressed ? 0.5 : 1
                }
            ]}
        >
            <Box
                width={40}
                height={40}
                justifyContent={'center'}
                alignItems={'center'}
                style={{
                    ...Platform.select({
                        web: {
                            boxShadow: '2px 4px 10px #eceff1'
                        }
                    })
                }}
            >
                <Icon
                    name={'plus'}
                    numberSize={20}
                    color={isHoveredIn ? 'primaryMain' : 'textColor'}
                />
            </Box>
        </Pressable>
    );
}

