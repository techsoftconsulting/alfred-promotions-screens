import Form from '@main-components/Form';
import {BaseInputDocTypes} from '@main-components/Form/docs/argTypes';

import React from 'react';
import ImageInput from '.';
import {Box} from "@main-components/Base";

export default {
    title: 'Global/Form/Inputs/ImageInput',
    component: null,
    argTypes: {
        ...BaseInputDocTypes,
        defaultImage: {
            name: 'defaultImage',
            type: {name: 'string', required: true},
            control: {
                type: 'text'
            },
            defaultValue:
                'https://i0.wp.com/3dprint.pe/wp-content/uploads/2020/10/placeholder.png?ssl=1',
            description: 'Default placeholder image url'
        },
        initialImage: {
            name: 'initialImage',
            type: {name: 'string', required: false},
            control: {
                type: 'text'
            },
            defaultValue: undefined,
            description: 'Initial image url'
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
    <Box width={400}>
        <ImageInput {...args} />
    </Box>
);

Basic.args = {
    source: 'myImageInput'
};
