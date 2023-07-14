import pick from 'lodash/pick';
import {useMemo} from 'react';
import createContext from '@modules/_shared/infrastructure/utils/context-selector'
import {ListContextProviderProps} from "@main-components/Utilities/ListContextProvider";

const ListPaginationContext = createContext<ListPaginationContextValue>({

    page: 1,
    perPage: undefined,
    setPage: () => {
    },
    setPerPage: () => {
    },
    total: 0,

});

ListPaginationContext.displayName = 'ListPaginationContext';

export type ListPaginationContextValue = {
    page: number,
    perPage: number,
    setPage: any,
    setPerPage: any,
    total: number,
}

export const usePickPaginationContext = (
    context: ListContextProviderProps
): ListPaginationContextValue =>
    useMemo(
        () =>
            pick(context, [
                'page',
                'perPage',
                'setPage',
                'setPerPage',
                'total',
            ]),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [
            context.page,
            context.perPage,
            context.setPage,
            context.setPerPage,
            context.total
        ]
    );

export default ListPaginationContext;
