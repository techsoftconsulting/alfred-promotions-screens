import {ListPaginationContextValue} from '../contexts/ListPaginationContext';
import {useContextSelector} from "@modules/_shared/infrastructure/utils/context-selector";
import ListContext from "@main-components/Utilities/ListContextProvider/contexts/ListContext";

const useListPaginationContext = (selector?: (props: ListPaginationContextValue) => any): ListPaginationContextValue => {
    const context = useContextSelector(ListContext, selector ? selector : (v) => v);

    return context;
};

export default useListPaginationContext;
