import React from 'react';
import ConfirmModal from "@main-components/Utilities/ConfirmModal";
import useNotificationProvider from "@modules/_shared/domain/hooks/use-notification-provider";

export default function ConfirmController() {
    const confirm = useNotificationProvider((state) => state.confirm);

    return (
        <ConfirmModal
            visible={confirm?.show}
            title={confirm?.title}
            content={confirm?.content}
            onClose={confirm?.onCancel}
            onConfirm={confirm?.onConfirm}
            showCancel={confirm?.options?.showCancel}
            confirmText={confirm?.options?.confirmText}
            cancelText={confirm?.options?.cancelText}
        />
    );
}