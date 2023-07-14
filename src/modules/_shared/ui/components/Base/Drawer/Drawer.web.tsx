import React from 'react';
import { DrawerProps } from './DrawerProps';
import BaseDrawer from '@mui/material/Drawer';

export function Drawer(props: DrawerProps) {
    return (
        <BaseDrawer
            {...props}
            anchor='right'
            open={true}
            variant={'permanent'}
        />
    );
}
