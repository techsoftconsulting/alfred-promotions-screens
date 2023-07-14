import {ListSortContextValue} from '../contexts/ListSortContext';
import {useContextSelector} from "@modules/_shared/infrastructure/utils/context-selector";
import ListContext from "@main-components/Utilities/ListContextProvider/contexts/ListContext";
import pick from "lodash/pick";

const useListSortContext = (selector?: (props: ListSortContextValue) => any): ListSortContextValue => {

    const getSortProps = (v: any) => pick(v, ["currentSort", "setSort"])

    const context = useContextSelector(ListContext, selector ? selector : (v) => v);

    return context;
};

export default useListSortContext;
