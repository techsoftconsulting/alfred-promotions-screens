import { useEffect } from 'react';
import { Keyboard } from 'react-native';

export function useKeyboardEvent({ onShow, onHidden }) {
    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            onShow();
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            onHidden();
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);
}
