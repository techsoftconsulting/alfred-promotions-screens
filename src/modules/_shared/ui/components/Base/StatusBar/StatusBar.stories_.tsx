import React from 'react';
import { StatusBar } from '.';

export default {
    title: 'Global/Base/StatusBar',
    component: StatusBar,
    argTypes: {}
};

export const Basic = (args) => <StatusBar {...args} />;

Basic.args = {};
