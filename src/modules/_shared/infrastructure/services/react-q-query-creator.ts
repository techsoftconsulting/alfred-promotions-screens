import useNotify from '@modules/_shared/domain/hooks/use-notify';
import ArrayUtils from '@modules/_shared/domain/utils/misc/array-utils';
import { QueryClient, useQuery as useBaseQuery, useQueryClient } from 'react-query';
import Query from '../../domain/models/query';
import QueryOptions from '../../domain/models/query-options';
import UseQueryValue from '../../domain/models/use-query-value';
import QueryCreator from '../../domain/services/query-creator';
import useHandleServiceError from '@modules/_shared/domain/hooks/use-handle-service-error';
import ServiceError from '@modules/_shared/domain/models/service-error';

export default class ReactQQueryCreator implements QueryCreator {
    execute(
        query: Query,
        queryFn: any,
        options: QueryOptions = {
            onSuccess: undefined,
            keepPreviousData: false,
            enabled: true
        }
    ): UseQueryValue {
        const { type, payload } = query;

        const {
            withDeclarativeSideEffectsSupport, onFailure, retry = false,
            cache, ...otherOptions
        } = options;

        const notify = useNotify();

        const handleErrorActive = otherOptions.handleServiceError ?? true;
        const errorHandler = useHandleServiceError({
            active: handleErrorActive ?? true
        });

        const { isLoading, refetch, error, isIdle, status, isFetching, isRefetching, data } = useBaseQuery(
            [query],
            async () =>
                queryFn().then((result: any) => ({
                    data: result,
                    ...(type === 'list' && {
                        ids: result ? result.map((item: any) => item.id) : [],
                        data: result ? ArrayUtils.keyBy(result, 'id') : []
                    })
                })),
            {
                onError: (e) => {
                    errorHandler.handle(
                        new ServiceError(
                            (() => {
                                if (e.message.indexOf('NO_INTERNET_CONNECTION') > -1)
                                    return 'NO_INTERNET_CONNECTION';

                                if (e.message.indexOf('Network request failed') > -1) {
                                    return 'NETWORK_FAILED';
                                }

                                return e.message + `. resource: ${query.id}`;

                            })()
                        )
                    );
                    onFailure?.(e);
                },
                retry: retry,
                ...(!cache && {
                    cacheTime: 0
                }),
                refetchOnWindowFocus: false,
                ...otherOptions
                //refetchOnMount: true,
            }
        );

        let result: any = data;

        const queryClient = useQueryClient();

        if (isLoading) {
            return {
                refetch: refetch,
                isIdle: false,
                loading: true,
                total: 0,
                isFetching: isFetching,
                isRefetching: isRefetching,
                error: null,
                data: undefined,
                loaded: false,
                ...(type === 'list' && {
                    ids: []
                })
            };
        }

        if (result && query.type === 'list') {
            const previousListData = getPreviousPageListData(
                query,
                queryClient
            );

            result.data = { ...previousListData.data, ...result.data };
            result.ids = ArrayUtils.uniq([
                ...previousListData.ids,
                ...result.ids
            ]);
        }

        return {
            refetch,
            loading: isLoading,
            total: ArrayUtils.isArray(result?.ids)
                ? result?.ids?.length
                : result?.total,
            error: error,
            data: result?.data,
            isIdle: isIdle,
            isFetching: isFetching,
            isRefetching: isRefetching,
            loaded: status == 'success',
            ...(type === 'list' && {
                ids: result?.ids,
                data: result?.data
            })
        };
    }
}

function getPreviousPageListData(
    currentQuery: Query,
    queryClient: QueryClient
) {
    const page = (currentQuery.payload as any).pagination?.page || 1;

    let pastData: any = {};
    let pastIds: string[] = [];

    if (page > 1) {
        for (let index = 1; index < page; index++) {
            const lastQuery = {
                ...currentQuery,
                payload: {
                    ...currentQuery.payload,
                    pagination: {
                        ...(currentQuery.payload as any).pagination,
                        page: index
                    }
                }
            };

            const lastQueryData = queryClient.getQueryData(
                JSON.stringify(lastQuery)
            );

            if (lastQueryData) {
                pastData = { ...pastData, ...(lastQueryData as any).data };
                pastIds = [...pastIds, ...(lastQueryData as any).ids];
            }
        }
    }

    return {
        data: pastData,
        ids: pastIds
    };
}
