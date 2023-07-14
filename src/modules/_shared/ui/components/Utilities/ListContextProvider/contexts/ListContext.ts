import createContext from '@modules/_shared/infrastructure/utils/context-selector';
import { ListContextProviderProps } from '@main-components/Utilities/ListContextProvider';
import { useMemo } from 'react';

export interface ListContextProps {
    data?: any;
    ids?: string[];
    loaded: boolean;
    loading: boolean;
    error?: any,
    refetch: undefined,
    isFetching: boolean,
    isRefetching: boolean,
    resource: string,

    currentSort?: any;
    setSort: any;

    setFilters: any;
    filters?: any
    showFilter: any
    hideFilter: any
    filterValues?: any
    displayedFilters?: any

    page: number,
    perPage?: number,
    setPage: any,
    setPerPage: any,
    total: number,
}

const ListContext = createContext<ListContextProps>({
    data: undefined,
    ids: undefined,
    error: undefined,
    refetch: undefined,
    isFetching: false,
    isRefetching: false,
    loaded: false,
    loading: false,
    resource: '',

    currentSort: undefined,
    setSort: () => {
    },

    setFilters: () => {
    },
    showFilter: () => {
    },
    hideFilter: () => {
    },
    filters: undefined,
    filterValues: undefined,
    displayedFilters: undefined,

    page: 1,
    perPage: undefined,
    setPage: () => {
    },
    setPerPage: () => {
    },
    total: 0
});

export const usePickListDataContext = (
    context: ListContextProviderProps
): ListContextProps =>
    useMemo(
        () =>
            context as any,
        [context]
    );

ListContext.displayName = 'ListContext';

export default ListContext;

