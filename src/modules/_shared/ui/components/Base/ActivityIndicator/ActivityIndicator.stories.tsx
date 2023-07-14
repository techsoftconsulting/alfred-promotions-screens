import React from 'react';
import { ActivityIndicator } from '.';

export default {
    title: 'Global/Base/ActivityIndicator',
    component: ActivityIndicator,
    argTypes: {
        size: {
            name: 'size',
            type: { name: 'number', required: false },
            control: {
                type: 'number'
            },
            defaultValue: 50,
            description: 'Size'
        },
        color: {
            name: 'color',

            description: 'Color'
        }
    }
};

export const Basic = (args) => <ActivityIndicator {...args} />;

Basic.args = {};
