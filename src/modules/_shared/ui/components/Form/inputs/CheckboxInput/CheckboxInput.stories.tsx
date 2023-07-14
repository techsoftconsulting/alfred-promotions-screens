import Form from '@main-components/Form';
import { BaseInputDocTypes } from '@main-components/Form/docs/argTypes';
import React from 'react';
import CheckboxInput from '.';

export default {
    title: 'Global/Form/Inputs/CheckboxInput',
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

export const Basic = (args) => <CheckboxInput {...args} />;

Basic.args = {
    source: 'myCheckboxInput'
};
