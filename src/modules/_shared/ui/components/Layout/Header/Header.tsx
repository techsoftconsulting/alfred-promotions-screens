import {palette, useTheme} from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';
import {Header as RNEHeader} from 'react-native-elements';
import HeaderProps from "@main-components/Layout/Header/HeaderProps";


export default function Header(props: HeaderProps) {
    const theme = useTheme();

    return (
        <RNEHeader
            leftComponent={props.leftComponent}
            centerComponent={props.centerComponent}
            rightComponent={props.rightComponent}
            leftContainerStyle={props.leftContainerStyle}
            centerContainerStyle={props.centerContainerStyle}
            rightContainerStyle={props.rightContainerStyle}
            backgroundColor={palette.BLUEGRAY_500}
            style={{
                borderBottomColor: 'transparent'
            }}
            containerStyle={{
                ...(props.style || {})
            }}
        />
    );
}
