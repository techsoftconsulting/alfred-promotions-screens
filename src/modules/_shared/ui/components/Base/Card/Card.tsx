import {useTheme} from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';
import {ImageProps, Platform, View} from 'react-native';
import {Card as BaseCard} from 'react-native-paper';
import {CardProps} from './CardProps';

export function Card(props: CardProps) {
    return (
        <BaseCard
            {...props}
            style={[
                props.style,
                [
                    {
                        borderRadius: 8,
                        backgroundColor: 'white',
                        ...(Platform.OS == 'web' && {
                            boxShadow: '-2px 5px 10px #eceff1'
                        })
                    }
                ]
            ]}
        />
    );
}

export interface CardTitleProps {
    title: any;
    subtitle?: string;
    left?: ((props: { size: number }) => React.ReactNode) | undefined;
    style?: any;
}

export function CardTitle(props: CardTitleProps) {
    const theme = useTheme();
    return (
        <BaseCard.Title
            title={props.title}
            subtitle={props.subtitle}
            left={props.left}
            titleStyle={{
                fontFamily: theme.textVariants.body.fontFamily,
                color: theme.colors.secondaryMain,
                fontWeight: "bold"
            }}
            style={[{
                paddingHorizontal: theme.spacing.m,
                borderBottomWidth: 1,
                borderColor: "#e9ecef"
            }, props.style ?? {}]}
        />
    );
}

export function CardHeader(props: CardTitleProps) {
    const theme = useTheme();

    return (
        <BaseCard.Title
            title={props.title}
            subtitle={props.subtitle}
            left={props.left}
            titleStyle={{
                fontFamily: theme.textVariants.body.fontFamily,
                color: theme.colors.secondaryMain,
                fontWeight: "bold"
            }}
            style={[{
                paddingHorizontal: theme.spacing.m,
                borderBottomWidth: 1,
                borderColor: "#e9ecef"
            }, props.style ?? {}]}
        />
    );
}

export interface CardContentProps {
    children: React.ReactNode;
    style?: any;
}

export function CardContent(props: CardContentProps) {
    const theme = useTheme();
    return (
        <BaseCard.Content style={[{padding: theme.spacing.m}, props.style]}>
            <View>{props.children}</View>
        </BaseCard.Content>
    );
}

type BaseCoverProps = ImageProps;

export type CardCoverProps = BaseCoverProps;

export function CardCover(props: CardCoverProps) {
    return <BaseCard.Cover {...props} />;
}

export type CardActionsProps = {
    children: React.ReactNode;
};

export function CardActions(props: CardActionsProps) {
    const theme = useTheme();

    return (
        <BaseCard.Actions
            {...props}
            style={[{padding: theme.spacing.m}, {}]}
        />
    );
}
