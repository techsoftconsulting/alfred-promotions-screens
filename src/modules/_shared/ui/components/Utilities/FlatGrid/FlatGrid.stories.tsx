import React from 'react';
import FlatGrid from '.';

export default {
    title: 'Global/Utilities/FlatGrid',
    component: FlatGrid,
    argTypes: {}
};

export const Basic = (args) => <FlatGrid {...args} />;

Basic.args = {};
