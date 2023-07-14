import { useContextSelector } from '@modules/_shared/infrastructure/utils/context-selector';
import { useMemo } from 'react';
import ServiceProviderContext from '../contexts/service-provider-context';

const useServiceProvider = (selector ?: (v) => any) => {
    const serviceProvider = useContextSelector(ServiceProviderContext,
        selector ? selector : (v) => v
    ) || {};


    const serviceProviderProxy = useMemo(() => {
        return serviceProvider;
    }, [serviceProvider]);

    return serviceProviderProxy;
};

export default useServiceProvider;
