import { Box } from '@main-components/Base';
import Form from '@main-components/Form';
import { BaseInputDocTypes } from '@main-components/Form/docs/argTypes';
import React from 'react';
import PasswordInput from '.';

export default {
    title: 'Global/Form/Inputs/PasswordInput',
    component: null,
    argTypes: {
        ...BaseInputDocTypes
    },
    decorators: [
        (Story) => {
            return (
                <Form onSubmit={() => {}} toolbar={<></>}>
                    <Story />
                </Form>
            );
        }
    ]
};

export const Basic = (args) => {
    return (
        <Box width={350}>
            <PasswordInput {...args} />
        </Box>
    );
};

Basic.args = {
    source: 'myPasswordInput'
};
