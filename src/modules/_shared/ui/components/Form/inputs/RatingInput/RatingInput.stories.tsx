import { Box } from '@main-components/Base';
import Form from '@main-components/Form';
import { BaseInputDocTypes } from '@main-components/Form/docs/argTypes';
import React from 'react';
import RatingInput from '.';

export default {
    title: 'Global/Form/Inputs/RatingInput',
    component: RatingInput,
    argTypes: {
        ...BaseInputDocTypes,
        iconSize: {
            name: 'iconSize',
            type: { name: 'number', required: false },
            control: {
                type: 'number',
                min: 1,
                max: 100
            },
            defaultValue: 10,
            description: 'Icon size'
        },
        count: {
            name: 'count',
            type: { name: 'number', required: false },
            control: {
                type: 'number',
                min: 1,
                max: 10
            },
            defaultValue: 5,
            description: 'Rating value'
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

export const Basic = (args) => (
    <Box width={350}>
        <RatingInput {...args} />
    </Box>
);

Basic.args = { source: 'myRatingInput' };
