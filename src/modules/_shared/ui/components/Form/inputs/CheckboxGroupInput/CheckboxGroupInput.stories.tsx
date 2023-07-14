import Form from '@main-components/Form';
import { BaseInputDocTypes } from '@main-components/Form/docs/argTypes';
import React from 'react';
import CheckboxGroupInput from '.';

export default {
    title: 'Global/Form/Inputs/CheckboxGroupInput',
    component: null,
    argTypes: {
        ...BaseInputDocTypes,
        choices: {
            name: 'choices',
            type: { name: 'array', required: true },
            control: {
                type: 'array'
            },
            defaultValue: [
                { id: 1, name: 'Option 1' },
                { id: 2, name: 'Option 2' },
                { id: 3, name: 'Option 3' }
            ],
            description:
                'Array of options in format { id: 1, name: "Option 1" }'
        },
        row: {
            name: 'row',
            type: { name: 'boolean', required: false },
            control: {
                type: 'boolean'
            },
            defaultValue: false,
            description: 'Display the options horizontally'
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

export const Basic = (args) => <CheckboxGroupInput {...args} />;

Basic.args = {
    source: 'myCheckBoxGroupInput'
};
