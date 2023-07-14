import {ListFilterContextValue} from '../contexts/ListFilterContext';
import {useContextSelector} from "@modules/_shared/infrastructure/utils/context-selector";
import ListContext from "@main-components/Utilities/ListContextProvider/contexts/ListContext";

const useListFilterContext = (selector?: (props: ListFilterContextValue) => any): ListFilterContextValue => {
    const context = useContextSelector(ListContext, selector ? selector : (v) => v);

    return context;
};

export default useListFilterContext;
