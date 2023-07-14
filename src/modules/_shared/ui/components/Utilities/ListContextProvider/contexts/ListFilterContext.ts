import pick from 'lodash/pick';
import { useMemo } from 'react';
import createContext from '@modules/_shared/infrastructure/utils/context-selector';
import { ListContextProviderProps } from '@main-components/Utilities/ListContextProvider';

const ListFilterContext = createContext<ListFilterContextValue>({
    setFilters: () => {
    },
    showFilter: () => {
    },
    hideFilter: () => {
    },
    hideFilters: () => {
    },
    filters: undefined,
    filterValues: undefined,
    displayedFilters: undefined
});

export type ListFilterContextValue = {
    setFilters: any;
    filters: any
    showFilter: (filterName: string, defaultValue: any) => void;
    hideFilter: any,
    hideFilters: any,
    hasFilters: boolean;
    filterValues: any
    displayedFilters: any
}


export const usePickFilterContext = (
    context: ListContextProviderProps
): ListFilterContextValue =>
    useMemo(
        () =>
            pick(context, [
                'filters',
                'setFilters',
                'showFilter',
                'hideFilter',
                'hideFilters',
                'filterValues',
                'displayedFilters'
            ]),
        [context.filters, context.setFilters, context.showFilter, context.hideFilter, context.hideFilters, context.filterValues, context.displayedFilters]
    );

ListFilterContext.displayName = 'ListFilterContext';

export default ListFilterContext;
