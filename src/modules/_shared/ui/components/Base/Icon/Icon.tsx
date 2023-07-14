import {
    Entypo,
    Feather,
    FontAwesome,
    FontAwesome5,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons
} from '@expo/vector-icons';
import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';
import { IconProps } from './IconProps';
import { IconType } from 'react-native-elements/dist/icons/Icon';
import { useFonts } from 'expo-font';
import { Image } from '@main-components/Base/Image';
import images from '@shared/ui/images/images';

export function Icon({
    color = 'primaryContrastText',
    name,
    size = 's',
    type,
    style,
    numberSize = 0
}: IconProps) {
    const theme = useTheme();

    return (
            <MyIcon
                    name={name}
                    type={type}
                    color={theme.colors[color]}
                    size={size && numberSize === 0 ? theme.iconSizes[size] : numberSize}
                    style={style}
            />
    );
}

const MyIcon = ({
    type,
    ...rest
}: {
    type?: IconType;
    name: string;
    color: string;
    size: number;
    style?: any;
}) => {
    switch (type) {
        case 'material':
            /* @ts-ignore */
            return <MaterialIcons {...rest} />;
        case 'font-awesome':
            /* @ts-ignore */
            return <FontAwesome {...rest} />;
        case 'font-awesome-5':
            /* @ts-ignore */
            return <FontAwesome5 {...rest} />;
        case 'ionicon':
            /* @ts-ignore */
            return <Ionicons {...rest} />;
        case 'material-community-icons':
            /* @ts-ignore */
            return <MaterialCommunityIcons {...rest} />;
        case 'entypo':
            /* @ts-ignore */
            return <Entypo {...rest} />;
        case 'feather':
            /* @ts-ignore */
            return <Feather {...rest} />;
        default:
            /* @ts-ignore */
            return <FontAwesome5 {...rest} />;
    }
};

export function TableIcon({ size, greyScale }: { size: number, greyScale?: boolean }) {
    return (
            <Image
                    source={images.TABLE}
                    style={{
                        ...greyScale && {
                            filter: 'grayscale(0.20)'
                        },
                        width: size,
                        height: size,
                        resizeMode: 'contain'
                    }}
            />
    );
}


export function useLoadIconFonts() {
    const [loaded, error] = useFonts({
        ...Entypo.font,
        ...FontAwesome.font,
        ...FontAwesome5.font,
        ...Ionicons.font,
        ...MaterialCommunityIcons.font,
        ...MaterialIcons.font
    });

    return {
        loaded,
        error
    };
}