import React from 'react';
import { ProgressBar } from '.';
import { Box } from '../Box';

export default {
    title: 'Global/Base/ProgressBar',
    component: ProgressBar,
    argTypes: {
        progress: {
            defaultValue: 40,
            description: 'Current progress'
        },
        borderRadius: {
            defaultValue: 20
        },
        height: {
            defaultValue: 10
        },
        color: {
            defaultValue: 'primaryMain'
        }
    }
};

export const Basic = (args) => {
    return (
        <Box width={200}>
            <ProgressBar {...args} />
        </Box>
    );
};

Basic.args = {};
