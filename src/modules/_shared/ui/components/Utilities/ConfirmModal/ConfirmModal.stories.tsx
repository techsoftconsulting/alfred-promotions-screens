import React from 'react';
import ConfirmModal from '.';

export default {
    title: 'Global/Utilities/ConfirmModal',
    component: ConfirmModal,
    argTypes: {}
};

export const Basic = (args) => <ConfirmModal {...args} />;

Basic.args = {};
