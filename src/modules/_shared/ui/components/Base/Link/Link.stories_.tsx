import React from 'react';
import { Link } from './Link';

export default {
    title: 'Global/Base/Link',
    component: Link,
    argTypes: {}
};

export const Basic = (args) => <Link {...args} />;

Basic.args = {};
