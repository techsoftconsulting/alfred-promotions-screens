import { useContextSelector } from '@modules/_shared/infrastructure/utils/context-selector';
import { useMemo } from 'react';
import DataProviderContext from '../contexts/data-provider-context';

const useDataProvider = (selector ?: (v) => any) => {
    const dataProvider = useContextSelector(
        DataProviderContext,
        selector ? selector : (v) => v
    );

    const dataProviderProxy = useMemo(() => {
        return dataProvider;
    }, [dataProvider]);

    return dataProviderProxy;
};

export default useDataProvider;
