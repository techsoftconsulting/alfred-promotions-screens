import { useCallback } from "react";
import useNotificationProvider from "./use-notification-provider";

type ConfirmProps = {
  title: string;
  content: string;
  onConfirm: () => void;
  onCancel?: () => void;
  options?: {
    showCancel?: boolean;
    confirmText?: string;
    cancelText?: string;
  };
};
const useConfirm = () => {
  const { dispatch } = useNotificationProvider();
  return useCallback(
    ({ title, content, onCancel, onConfirm, options }: ConfirmProps) => {
      dispatch({
        type: "SHOW_CONFIRM",
        title: title,
        content: content,
        onConfirm: () => {
          onConfirm();
          dispatch({
            type: "HIDE_CONFIRM",
          });
        },
        onCancel: () => {
          onCancel && onCancel();
          dispatch({
            type: "HIDE_CONFIRM",
          });
        },
        options: options,
      });
    },
    [dispatch]
  );
};

export default useConfirm;
