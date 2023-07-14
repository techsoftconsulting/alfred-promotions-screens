import { QueryClient } from 'react-query';
import Mutation from '../../models/mutation';
import MutationCreator from '../../services/mutation-creator';
import useRepository from '../use-repository';
import useService from '../use-service';

const defaultOptions = {
    invalidateList: true,
    invalidateGet: true
};

export default function useUpdate<Model, Repository>(props: {
    resource: string;
    repository: string;
    fn: (repo: Repository, id: string, changes: Model) => Promise<void>;
    onSuccess?: (response: any, queryClient: QueryClient, params: any) => void;
    onFailure?: (error: any) => void;
    options?: {
        invalidateList?: boolean
        invalidateGet?: boolean
    }
}) {
    const { resource, repository, fn, onFailure, onSuccess, options = defaultOptions } = props;
    const repo = useRepository<Repository>(repository);
    const mutationCreator = useService<MutationCreator>('MutationCreator');

    const mutation: Mutation = {
        id: resource,
        payload: {},
        type: 'update'
    };

    const [mutate, state] = mutationCreator.execute(
        mutation,
        (payload: { id: string; changes: Model }) =>
            fn(repo, payload.id, payload.changes),
        {
            onFailure: (error) => {
                onFailure && onFailure(error);
            },
            onSuccess: (response, queryClient, params) => {
                const optionsToApply = { ...defaultOptions, ...options };

                if (optionsToApply.invalidateList) {
                    queryClient.resetQueries(
                        {
                            predicate: query => {
                                const queryKey: any = query.queryKey[0];
                                return queryKey.id === mutation.id && (queryKey.type === 'list' || queryKey.type === 'count-list');
                            }
                        }
                    );
                }

                if (optionsToApply.invalidateGet) {
                    queryClient.resetQueries(
                        {
                            predicate: query => {
                                const queryKey: any = query.queryKey[0];
                                return queryKey.type === 'get' && queryKey.payload?.id === params.id;
                            }
                        }
                    );
                }

                onSuccess && onSuccess(response, queryClient, params);
            }
        }
    );

    return {
        save: async (id: string, changes: Model) => {
            return mutate({
                ...mutation,
                payload: {
                    id,
                    changes
                }
            });
        },
        reset: state.reset,
        loading: state.loading,
        loaded: state.loaded,
        data: null,
        error: state.error
    };
}
