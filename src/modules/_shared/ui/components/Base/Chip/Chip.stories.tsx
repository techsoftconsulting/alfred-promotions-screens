import React from 'react';
import { Chip } from '.';
import { Box } from '../Box';

export default {
    title: 'Global/Base/Chip',
    component: Chip,
    argTypes: {
        color: {
            name: 'color',
            defaultValue: 'primaryMain',
            description: 'Color'
        },
        onPress: {
            table: {
                disable: true
            }
        },
        icon: {
            table: {
                disable: true
            }
        },
        onClose: {
            table: {
                disable: true
            }
        },
        label: {
            name: 'label',
            defaultValue: 'My chip',
            description: 'Text'
        },
        size: {
            name: 'label',
            defaultValue: 'm',
            description: 'Size'
        }
    }
};

export const Basic = (args) => {
    return (
        <Box width={100}>
            <Chip {...args} />
        </Box>
    );
};

Basic.args = {};
