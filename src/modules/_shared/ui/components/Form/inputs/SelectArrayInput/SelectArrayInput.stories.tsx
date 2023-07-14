import {Box} from '@main-components/Base';
import Form from '@main-components/Form';
import {BaseInputDocTypes} from '@main-components/Form/docs/argTypes';
import React from 'react';
import SelectArrayInput from '.';

export default {
    title: 'Global/Form/Inputs/SelectArrayInput',
    component: null,
    argTypes: {
        ...BaseInputDocTypes,
        choices: {
            name: 'choices',
            type: {name: 'array', required: true},
            control: {
                type: 'array'
            },
            defaultValue: [{id: 1, name: 'Option 1'}, {id: 2, name: 'Option 2'}],
            description:
                'Array of options in format { id: 1, name: "Option 1" }'
        },
        defaultValue: {
            defaultValue: [1],
        }
    },
    decorators: [
        (Story) => {
            return (
                <Form
                    onSubmit={() => {
                    }}
                    toolbar={<></>}
                >
                    <Story/>
                </Form>
            );
        }
    ]
};

export const Basic = (args) => {
    return (
        <Box width={350}>
            <SelectArrayInput {...args}  />
        </Box>
    );
};

Basic.args = {source: 'mySelectArrayInput'};
