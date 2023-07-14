import { useContextSelector } from '@modules/_shared/infrastructure/utils/context-selector';
import { useMemo } from 'react';
import NotificationProviderContext from '../contexts/notification-provider-context';

const useNotificationProvider = (selector?: (state: any) => any) => {
    const defaultSelector = (v) => v;
    const provider =
        useContextSelector(
            NotificationProviderContext,
            selector || defaultSelector
        ) || {};

    const providerProxy = useMemo(() => {
        return provider;
    }, [provider]);

    return providerProxy;
};

export default useNotificationProvider;
