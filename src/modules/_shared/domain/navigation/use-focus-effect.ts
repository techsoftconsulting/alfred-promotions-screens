import React from 'react';
import { useFocusEffect as useBaseFocusEffect } from 'expo-router';

export function useFocusEffect(
    subscriptionFn: () => any,
    dependencies: any[] = []
): any {
    useBaseFocusEffect(
        React.useCallback(() => {

            const unsubscribe = subscriptionFn();

            return () => unsubscribe;
        }, dependencies)
    );
}
