import {Box} from '@main-components/Base';
import Form from '@main-components/Form';
import {BaseInputDocTypes} from '@main-components/Form/docs/argTypes';
import React from 'react';
import RichTextInput from '.';

export default {
    title: 'Global/Form/Inputs/RichTextInput',
    component: null,
    argTypes: {
        ...BaseInputDocTypes,
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
        <RichTextInput {...args} />
    </Box>
);

Basic.args = {source: 'myTextInput'};
