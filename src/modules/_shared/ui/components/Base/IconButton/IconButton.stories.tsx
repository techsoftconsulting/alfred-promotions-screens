import React from 'react';
import { IconButton } from '.';

export default {
    title: 'Global/Base/IconButton',
    component: IconButton,
    argTypes: {
        iconType: {
            description: 'Type of icon. see https://icons.expo.fyi/',
            defaultValue: 'font-awesome'
        },
        iconName: {
            description: 'Icon name in type. see https://icons.expo.fyi/',
            defaultValue: 'home'
        },

        backgroundColor: { defaultValue: 'primaryMain' },

        onPress: {
            table: {
                disable: true
            }
        },
        borderRadius: {
            defaultValue: 50
        },
        containerSize: {
            defaultValue: 50
        },
        iconSize: {
            defaultValue: 30
        },
        iconColor: {
            defaultValue: 'white'
        }
    }
};

export const Basic = (args) => <IconButton {...args} />;

Basic.args = {};
