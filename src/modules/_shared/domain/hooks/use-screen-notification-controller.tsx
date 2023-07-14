import useNotificationProvider from './use-notification-provider';

export default function useScreenNotificationController() {
    const { text, notificationType } = useNotificationProvider((state) => ({
        text: state.text,
        notificationType: state.notificationType
    }));

    if (!text || notificationType !== 'screen') {
        return { screen: null };
    }

    return {
        screen: text
    };
}
