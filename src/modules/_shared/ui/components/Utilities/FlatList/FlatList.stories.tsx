import React from 'react';
import FlatList from '.';

export default {
    title: 'Global/Utilities/FlatList',
    component: FlatList,
    argTypes: {}
};

export const Basic = (args) => <FlatList {...args} />;

Basic.args = {};
