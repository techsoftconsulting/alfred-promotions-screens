import React from 'react';
import { Paper } from '.';

export default {
    title: 'Global/Base/Paper',
    component: Paper,
    argTypes: {}
};

export const Basic = (args) => <Paper {...args} />;

Basic.args = {};
