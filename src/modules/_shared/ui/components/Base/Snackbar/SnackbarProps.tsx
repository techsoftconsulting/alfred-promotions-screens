export interface SnackbarProps {
    visible: boolean;
    onDismiss: () => void;
    type: 'info' | 'warning' | 'error' | 'success' | 'default';
    duration?: number;
    action?: {
        label: string;
        onPress?: any;
    };
    text: string;
}
