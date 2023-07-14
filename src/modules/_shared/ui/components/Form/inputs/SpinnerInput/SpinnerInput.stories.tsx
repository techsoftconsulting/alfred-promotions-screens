import { Box } from '@main-components/Base';
import Form from '@main-components/Form';
import { BaseInputDocTypes } from '@main-components/Form/docs/argTypes';
import React from 'react';
import SpinnerInput from '.';

export default {
    title: 'Global/Form/Inputs/SpinnerInput',
    component: SpinnerInput,
    argTypes: {
        ...BaseInputDocTypes,

        min: {
            name: 'min',
            type: { name: 'number', required: false },
            control: {
                type: 'number'
            },
            defaultValue: 1,
            description: 'Min value'
        },
        max: {
            name: 'max',
            type: { name: 'number', required: false },
            control: {
                type: 'number'
            },
            defaultValue: 10,
            description: 'Max value'
        }
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
            <SpinnerInput {...args} />
        </Box>
    );
};
Basic.args = { source: 'mySpinnerInput' };
