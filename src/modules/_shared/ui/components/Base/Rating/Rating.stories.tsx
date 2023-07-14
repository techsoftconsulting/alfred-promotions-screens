import React from 'react';
import { Rating } from '.';

export default {
    title: 'Global/Base/Rating',
    component: Rating,
    argTypes: {
        count: {
            defaultValue: 3,
            description: 'Current rating'
        },
        iconSize: {
            defaultValue: 20
        },
        isDisabled: {
            defaultValue: true
        }
    }
};

export const Basic = (args) => <Rating {...args} />;

Basic.args = {};
