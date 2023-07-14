import Form from '@main-components/Form';
import { BaseInputDocTypes } from '@main-components/Form/docs/argTypes';
import React from 'react';
import NumberInput from '.';
import { Box } from '@main-components/Base';

export default {
    title: 'Global/Form/Inputs/NumberInput',
    component: null,
    argTypes: {
        ...BaseInputDocTypes
    },
    decorators: [
        (Story) => {
            return (
                <Form
                    onSubmit={() => {
                    }}
                    toolbar={<></>}
                >
                    <Story />
                </Form>
            );
        }
    ]
};

export const Basic = (args) => {
    return (
        <Box width={350}>
            <NumberInput {...args} />
        </Box>
    );
};

Basic.args = {
    source: 'myNumberInput'
};
