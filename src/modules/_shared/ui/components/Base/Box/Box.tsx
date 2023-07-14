import { BaseBox as CustomBox } from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';
import { BoxProps } from './BoxProps';

export function Box(props: BoxProps) {
    return <CustomBox {...props} />;
}
