import React from 'react';
import { Snackbar } from '.';

export default {
    title: 'Global/Base/Snackbar',
    component: Snackbar,
    argTypes: {}
};

export const Basic = (args) => <Snackbar {...args} />;

Basic.args = {};
