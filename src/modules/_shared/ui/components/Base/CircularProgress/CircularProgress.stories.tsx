import React from 'react';
import { CircularProgress } from '.';

export default {
    title: 'Global/Base/CircularProgress',
    component: CircularProgress,
    argTypes: {}
};

export const Basic = (args) => <CircularProgress {...args} />;

Basic.args = {};
