import React from 'react';

export interface BaseCheckboxItemInputProps {
    checked?: boolean;
    onChange?: any;
    value?: any;
    title: string | React.ReactElement<{}>;
    error?: any;
    disabled?: boolean;
}
