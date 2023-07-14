import React from 'react';
import { ListItem } from '.';

export default {
    title: 'Global/Base/List/ListItem',
    component: ListItem,
    argTypes: {}
};

export const Basic = (args) => <ListItem {...args} />;

Basic.args = {};
