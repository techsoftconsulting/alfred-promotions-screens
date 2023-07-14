import * as React from 'react';
import ListContext, { usePickListDataContext } from './contexts/ListContext';
import SortOptions from '@modules/_shared/domain/models/sort-options';

export interface ListContextProviderProps {
    data?: any;
    ids?: string[];
    loaded: boolean;
    loading: boolean;
    page: any;
    perPage?: any;
    total: number;
    resource: any;
    error?: any;
    refetch: undefined,
    isFetching: boolean;
    isRefetching: boolean;
    filters?: any;
    currentSort?: SortOptions;
    setFilters: any;
    setPage: any;
    setSort: any;
    setPerPage: any;
    hasFilters: boolean;
    displayedFilters?: any;
    hideFilter: (filterName: string) => void;
    hideFilters: (filterNames: string[]) => void;
    showFilter: (filterName: string, defaultValue: any) => void;
    filterValues?: any;
}

export function ListContextProvider({ value, children }: { value: ListContextProviderProps, children: any }) {
    return (
        <ListContext.Provider
            value={usePickListDataContext(value)}
        >
            {children}
            {/*<ListFilterContext.Provider value={usePickFilterContext(value)}>
                <ListSortContext.Provider value={usePickSortContext(value)}>
                    <ListPaginationContext.Provider
                        value={usePickPaginationContext(value)}
                    >

                    </ListPaginationContext.Provider>
                </ListSortContext.Provider>
            </ListFilterContext.Provider>*/}
        </ListContext.Provider>
    );
}
