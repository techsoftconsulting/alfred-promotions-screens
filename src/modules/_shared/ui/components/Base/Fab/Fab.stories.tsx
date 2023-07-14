import React from 'react';
import { Fab } from '.';
import { Box } from '../Box';

export default {
    title: 'Global/Base/Fab',
    component: Fab,
    argTypes: {
        icon: {
            control: null
        },
        style: {
            control: null
        },
        textColor: {
            defaultValue: 'white'
        }
    }
};

export const Basic = (args) => {
    return (
        <Box width={100} style={{ marginTop: 200 }}>
            <Fab {...args} icon="plus" />
        </Box>
    );
};

Basic.args = {};
