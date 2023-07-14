import React, { FC } from 'react';
import { SaveButtonProps } from '@main-components/Form/components/SaveButton';

export default interface FormProps {
    defaultValues?: any;
    children: any;
    onSubmit?: any;
    toolbar?: React.ReactElement;
    saveButtonProps?: SaveButtonProps;
    Wrapper?: FC;
    containerStyle?: any;
}