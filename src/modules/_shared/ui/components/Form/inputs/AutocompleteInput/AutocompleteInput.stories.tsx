import { Box } from '@main-components/Base/Box';
import Form from '@main-components/Form';
import { BaseInputDocTypes } from '@main-components/Form/docs/argTypes';
import React from 'react';
import AutocompleteInput from '.';

export default {
    title: 'Global/Form/Inputs/AutocompleteInput',
    component: null,
    argTypes: {
        ...BaseInputDocTypes,
        choices: {
            name: 'choices',
            type: { name: 'array', required: true },
            control: {
                type: 'array'
            },
            defaultValue: [{ id: 1, name: 'Option 1' }],
            description:
                'Array of options in format { id: 1, name: "Option 1" }'
        },
        searchPlaceholderText: {
            name: 'searchPlaceholderText',
            type: { name: 'string', required: false },
            control: {
                type: 'text'
            },
            defaultValue: 'Search here',
            description: 'Placeholder Text bor search box'
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
            <AutocompleteInput {...args} />
        </Box>
    );
};

Basic.args = {
    source: 'myAutocompleteInput'
};
