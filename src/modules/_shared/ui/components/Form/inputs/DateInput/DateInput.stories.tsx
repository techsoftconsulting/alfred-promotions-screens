import { Box } from '@main-components/Base/Box';
import Form from '@main-components/Form';
import { BaseInputDocTypes } from '@main-components/Form/docs/argTypes';
import React from 'react';
import DateInput from '.';

export default {
    title: 'Global/Form/Inputs/DateInput',
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
            <DateInput {...args} />
        </Box>
    );
};

Basic.args = {
    source: 'myDateInput'
};
