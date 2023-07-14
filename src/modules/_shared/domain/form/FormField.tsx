import {Box} from '@main-components/Base/Box';
import * as React from 'react';
import {Platform} from 'react-native';

export const isRequired = (validate: any) => {
    if (validate && validate.isRequired) {
        return true;
    }
    if (Array.isArray(validate)) {
        return !!validate.find((it) => it.isRequired);
    }
    return false;
};

interface Props {
    children: any;
    noMargin?: boolean
}

export default function FormField({
    noMargin = false,
    ...props
}: Props) {
    const boxProps: any = {
        ...(!noMargin && {mb: Platform.select({web: "l", default: "m"})})
    }

    return (
        <Box {...boxProps}>
            {props.children}
        </Box>
    );
}
