import Mutation from '@modules/_shared/domain/models/mutation';
import MutationOptions from '@modules/_shared/domain/models/mutation-options';
import { UseMutationValue } from '@modules/_shared/domain/models/use-mutation-value';
import MutationCreator from '@modules/_shared/domain/services/mutation-creator';
import { useMutation as useBaseMutation, useQueryClient } from 'react-query';

export default class ReactQueryMutationCreator implements MutationCreator {
    execute(
        query: Mutation,
        queryFn: any,
        options?: MutationOptions
    ): UseMutationValue {
        const key = JSON.stringify(query);
        const queryClient = useQueryClient();

        const mutation = useBaseMutation(
            (data) =>
                queryFn(data).then((result: any) => ({
                    data: result
                })),
            {
                mutationKey: key,
                onMutate: async () => {
                    await queryClient.cancelQueries(key);
                },
                onError: (error) => {
                    options?.onFailure && options.onFailure(error);
                },
                onSuccess: (response, params) => {

                    options?.onSuccess && options.onSuccess(response, queryClient, params);
                    // queryClient.invalidateQueries(key);
                }
            }
        );

        const mutateFunction = async (
            query?: Partial<Mutation>,
            options?: Partial<MutationOptions>
        ): Promise<any> => {
            const data: any = query?.payload || [];
            const result: any = await mutation.mutateAsync(data);

            return result?.data ? result.data : undefined;
        };

        const initialResult = {
            reset: mutation.reset,
            data: null,
            error: null,
            total: 0,
            loading: true,
            loaded: mutation.isSuccess
        };

        if (mutation.isLoading) {
            return [mutateFunction, initialResult];
        }

        const result = mutation;

        return [
            mutateFunction,
            {
                reset: mutation.reset,
                total: (result as any)?.total,
                data: (result as any)?.data,
                error: mutation.error,
                loading: mutation.isLoading,
                loaded: mutation.isSuccess
            }
        ];
    }
}
