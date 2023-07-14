import createContext from '@modules/_shared/infrastructure/utils/context-selector';
import { NotificationType } from '../models/notification-type';

const NotificationProviderContext = createContext<{
    show: boolean;
    dispatch: any;
    state: any;
    text: string;
    notificationType?: NotificationType;
    messageArgs?: any;
    undoable?: boolean;
    autoHideDuration?: number;
    confirm: {
        show: boolean;
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
    action?: {
        label: string;
        onPress?: () => any;
    };
}>(
    // @ts-ignore
    null
);

NotificationProviderContext.displayName = 'NotificationProviderContext';

export default NotificationProviderContext;
