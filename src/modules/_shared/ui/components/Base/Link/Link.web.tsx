import Text from '@main-components/Typography/Text';
import useNavigation from '@modules/_shared/domain/hooks/navigation/use-navigation';
import React from 'react';
import {LinkProps} from './LinkProps';
import {Link as BaseLink} from '@react-navigation/native';

export function Link(props: LinkProps) {
    const {navigate} = useNavigation();

    return (
        <BaseLink to={{screen: props.to as string}}>
            <Text color={props.textColor ?? 'primaryMain'} {...props.textProps}>
                {props.label}
            </Text>
        </BaseLink>
    );
}
