import React from 'react';

export interface ModalProps {
    visible: boolean;
    onDismiss?: () => void;
    contentContainerStyle?: any;
    containerStyle?: any;
    style?: any;
    children: React.ReactNode;
    dismissable?: boolean;
}
