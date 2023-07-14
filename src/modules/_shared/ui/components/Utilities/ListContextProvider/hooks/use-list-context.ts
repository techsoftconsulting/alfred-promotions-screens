import { useContextSelector } from '@modules/_shared/infrastructure/utils/context-selector';
import ListContext, { ListContextProps } from '../contexts/ListContext';
import pick from 'lodash/pick';

const useListContext = (selector?: (props: ListContextProps) => any): ListContextProps => {

    const getListProps = (v: any) => pick(v, ['data', 'ids', 'loaded', 'loading', 'error', 'isFetching', 'isRefetching', 'refetch', 'resource']);
    const context = useContextSelector(ListContext, selector ? selector : (v) => getListProps(v));

    return context;
};

export default useListContext;
