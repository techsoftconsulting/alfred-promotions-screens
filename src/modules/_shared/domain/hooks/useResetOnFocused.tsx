import { useState } from 'react';
import { useFocusEffect } from '@modules/_shared/domain/navigation/use-focus-effect';

export function useResetOnFocused() {
    const [ready, setReady] = useState(false);
    useFocusEffect(() => {
        setReady(false);
        setTimeout(() => {
            setReady(true);
        }, 0);
    });

    return {
        ready
    };
}