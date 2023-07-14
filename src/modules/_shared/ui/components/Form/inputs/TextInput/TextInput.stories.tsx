import {Box} from '@main-components/Base';
import Form from '@main-components/Form';
import {BaseInputDocTypes} from '@main-components/Form/docs/argTypes';
import React from 'react';
import TextInput from '.';

export default {
    title: 'Global/Form/Inputs/TextInput',
    component: null,
    argTypes: {
        ...BaseInputDocTypes,
        multiline: {
            name: 'multiline',
            type: {name: 'boolean', required: false},
            control: {
                type: 'boolean'
            },
            defaultValue: false,
            description: 'has multiple lines (TextArea)'
        },
        numberOfLines: {
            name: 'numberOfLines',
            type: {name: 'number', required: false},
            control: {
                type: 'number'
            },
            defaultValue: undefined,
            description: 'Number of lines'
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

export const Basic = (args) => (
    <Box width={350}>
        <TextInput {...args} />
    </Box>
);

Basic.args = {source: 'myTextInput'};


export const Textarea = (args) => (
    <Box width={350}>
        <TextInput {...args} multiline
            numberOfLines={10}
        />
    </Box>
);

Textarea.args = {source: 'myTextInput'};