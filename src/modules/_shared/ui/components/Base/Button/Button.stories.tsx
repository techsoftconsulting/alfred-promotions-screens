import React from 'react';
import { Button } from '.';
import { Box } from '../Box';

export default {
    title: 'Global/Base/Button',
    component: Button,
    argTypes: {
        compact: {
            table: {
                disable: true
            }
        },
        icon: {
            table: {
                disable: true
            }
        },
        raised: {
            table: {
                disable: true
            }
        },

        block: {
            table: {
                disable: true
            }
        },
        style: {
            table: {
                disable: true
            }
        },
        onPress: {
            defaultValue: () => {},
            table: {
                disable: true
            }
        },
        title: {
            defaultValue: 'Press me'
        },
        size: {
            defaultValue: 'm'
        },
        borderRadius: {
            defaultValue: 's'
        },
        mode: {
            defaultValue: 'contained'
        },
        backgroundColor: {
            defaultValue: 'primaryMain'
        }
    }
};

export const Basic = (args) => {
    return (
        <Box width={150}>
            <Button {...args} />
        </Box>
    );
};

Basic.args = {};
