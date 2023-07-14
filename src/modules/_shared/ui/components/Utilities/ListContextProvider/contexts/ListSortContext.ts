import pick from 'lodash/pick';
import {useMemo} from 'react';
import createContext from '@modules/_shared/infrastructure/utils/context-selector'
import {ListContextProviderProps} from "@main-components/Utilities/ListContextProvider";
import SortOptions from "@modules/_shared/domain/models/sort-options";

const ListSortContext = createContext<ListSortContextValue>({
    currentSort: undefined,
    setSort: (o: SortOptions) => {
    }
});

export type ListSortContextValue = {
    currentSort: SortOptions,
    setSort: (o: SortOptions) => {}
}
export const usePickSortContext = (
    context: ListContextProviderProps
): ListSortContextValue =>
    useMemo(
        () => pick(context, ['currentSort', 'setSort']) as any,
        [context.currentSort, context.setSort]
    );

ListSortContext.displayName = 'ListSortContext';

export default ListSortContext;
