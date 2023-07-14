import React from 'react';
import { Icon } from './Icon';

export default {
    title: 'Global/Base/Icon',
    component: Icon,
    argTypes: {
        type: {
            description: 'Type of icon. see https://icons.expo.fyi/',
            defaultValue: 'font-awesome'
        },
        name: {
            description: 'Icon name in type. see https://icons.expo.fyi/',
            defaultValue: 'home'
        },
        size: { defaultValue: 's' },
        color: { defaultValue: 'primaryMain' },
        numberSize: { description: 'Custom size' },
        style: {
            table: {
                disable: true
            }
        }
    }
};

export const Basic = (args) => <Icon {...args} />;

Basic.args = {};
