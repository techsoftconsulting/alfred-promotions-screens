import ObjectUtils from '@modules/_shared/domain/utils/misc/object-utils';
import PaginationOptions from '../../models/pagination-options';
import Query from '../../models/query';
import QueryOptions from '../../models/query-options';
import { ResourceCount } from '../../models/resource-count';
import SortOptions from '../../models/sort-options';
import UseQueryValue from '../../models/use-query-value';
import QueryCreator from '../../services/query-creator';
import useRepository from '../use-repository';
import useService from '../use-service';

type ResponseQueryValue<Model> = Omit<UseQueryValue, 'data' | 'isIdle'> & {
    data?: { [id: string]: Model };
    isIdle?: boolean;
    ids?: string[];
};

export interface UseGetListValue<T> extends ResponseQueryValue<T> {
}

export default function useGetList<Model, Repository>(props: {
    resource: string;
    repository: string;
    filters?: any;
    pagination?: PaginationOptions;
    sort?: SortOptions;
    fn: (
        repo: Repository,
        filters?: any,
        pagination?: PaginationOptions,
        sort?: SortOptions
    ) => Promise<Model[]>;
    countFn?: (repo: Repository, filters?: any) => Promise<ResourceCount>;
    onFailure?: any;
    options?: QueryOptions;
}): UseGetListValue<Model> {
    const {
        resource,
        repository,
        fn,
        filters,
        pagination,
        sort,
        countFn,
        options,
        onFailure
    } = props;

    const repo = useRepository<Repository>(repository);
    const queryCreator = useService<QueryCreator>('QueryCreator');

    const query: Query = {
        id: resource,
        payload: {
            filters,
            pagination,
            sort,
            ...(options?.queryGroups ? { queryGroups: options.queryGroups } : {})
        },
        type: 'list'
    };

    const queryState: ResponseQueryValue<Model> = queryCreator.execute(
        query,
        () => fn(repo, filters, pagination, sort),
        {
            keepPreviousData: true,
            ...options,
            onFailure: onFailure
        }
    );

    const queryCountState: UseQueryValue =
        countFn
            ? queryCreator.execute(
                {
                    ...query,
                    payload: {
                        ...ObjectUtils.omit(query.payload, [
                            'pagination',
                            'sort'
                        ])
                    },
                    type: 'count-list'
                },
                () => countFn(repo, filters),
                {
                    // keepPreviousData: false,
                    ...options
                }
            )
            : {
                isFetching: false,
                isRefetching: false,
                loading: false,
                loaded: true,
                data: undefined,
                refetch: undefined,
                total: 0,
                error: undefined,
                isIdle: false
            };

    const total = countFn
        ? (queryCountState?.data as ResourceCount | undefined)?.count
        : queryState.total;

    const loading = queryCountState.loading || queryState.loading;

    return {
        ...queryState,
        loading: loading,
        total: total
    };
}
