import { useContextSelector } from '@shared/infrastructure/utils/context-selector';
import { useMemo } from 'react';
import EventsProviderContext from '@shared/domain/contexts/events-provider-context';

const useEventsProvider = (selector?: (state: any) => any) => {
    const defaultSelector = (v) => v;
    const provider =
        useContextSelector(
            EventsProviderContext,
            selector || defaultSelector
        ) || {};

    const providerProxy = useMemo(() => {
        return provider;
    }, [provider]);

    return providerProxy;
};

export default useEventsProvider;
