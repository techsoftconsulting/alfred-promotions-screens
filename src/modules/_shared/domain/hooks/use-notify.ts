import { useCallback } from 'react';
import { NotificationType } from '../models/notification-type';
import useNotificationProvider from './use-notification-provider';

/**
 * Hook for Notification Side Effect
 *
 * @example
 *
 * const notify = useNotify();
 * // simple message (info level)
 * notify('Level complete');
 * // specify level
 * notify('A problem occurred', 'warning')
 * // pass arguments to the translation function
 * notify('Deleted %{count} elements', 'info', { smart_count: 23 })
 * // show the action as undoable in the notification
 * notify('Post renamed', 'info', {}, true)
 */
const useNotify = () => {
    const dispatch = useNotificationProvider((state) => state.dispatch);
    return useCallback(
        (
            message: string,
            type: NotificationType,
            messageArgs: any = {},
            undoable: boolean = false,
            autoHideDuration?: number
        ) => {
            if (type == 'screen') {
                dispatch({
                    type: 'SHOW_NOTIFICATION',
                    text: message,
                    notificationType: type,
                    messageArgs,
                    undoable,
                    autoHideDuration
                });
                return;
            }

            if (type == 'event') {
                dispatch({
                    type: 'SHOW_NOTIFICATION',
                    text: message,
                    notificationType: type,
                    messageArgs,
                    undoable,
                    autoHideDuration
                });
                return;
            }

            dispatch({
                type: 'SHOW_NOTIFICATION',
                text: message,
                notificationType: type,
                messageArgs,
                undoable,
                autoHideDuration
            });
        },
        [dispatch]
    );
};

export default useNotify;
