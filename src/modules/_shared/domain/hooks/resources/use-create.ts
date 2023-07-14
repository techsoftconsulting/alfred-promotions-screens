import {QueryClient} from 'react-query';
import Mutation from '../../models/mutation';
import MutationCreator from '../../services/mutation-creator';
import useRepository from '../use-repository';
import useService from '../use-service';

const defaultOptions = {
    invalidateList: true
};

export default function useCreate<Repository,
    NewInstanceData extends object | undefined>(props: {
    resource: string;
    repository: string;
    fn: (repo: Repository, newItem: NewInstanceData) => Promise<any>;
    onSuccess?: (response: any, queryClient: QueryClient, params: any) => void;
    onFailure?: (error: any) => void;
    options?: {
        invalidateList?: boolean
    }
}) {
    const {resource, repository, fn, onSuccess, onFailure, options = defaultOptions} = props;

    const repo = useRepository<Repository>(repository);

    const mutationCreator = useService<MutationCreator>('MutationCreator');

    const mutation: Mutation = {
        id: resource,
        payload: {},
        type: 'create'
    };

    const [mutate, state] = mutationCreator.execute(
        mutation,
        (newItem: NewInstanceData) => fn(repo, newItem),
        {
            onFailure: (error) => {
                onFailure && onFailure(error);
            },
            onSuccess: (response, queryClient, params) => {
                const optionsToApply = {...defaultOptions, ...options};

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

                onSuccess && onSuccess(response, queryClient, params);
            }
        }
    );
    
    return {
        save: async (newInstanceData?: NewInstanceData) => {
            return mutate({
                ...mutation,
                payload: newInstanceData
            });
        },
        reset: state.reset,
        loading: state.loading,
        loaded: state.loaded,
        data: state.data?.data,
        error: state.error
    };
}
