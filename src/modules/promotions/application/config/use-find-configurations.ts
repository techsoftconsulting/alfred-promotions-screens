import useService from '@shared/domain/hooks/use-service';
import UseQueryValue from '@shared/domain/models/use-query-value';
import QueryCreator from '@shared/domain/services/query-creator';
import QueryOptions from '@shared/domain/models/query-options';
import InMemoryConfigRepo from '@modules/promotions/infrastructure/repositories/in-memory-config-repo';

type ResponseQueryValue = Omit<UseQueryValue, 'data'> & {
    data?: {
        mallId: string
    };
};

export default function useFindConfigurations(options?: QueryOptions): ResponseQueryValue {

    const queryCreator = useService<QueryCreator>('QueryCreator');

    const queryState: ResponseQueryValue = queryCreator.execute(
        {
            id: 'configurations',
            payload: {},
            type: ''
        },
        () => {
            const repo = new InMemoryConfigRepo();
            return repo.getDoc('alfred', 'configurations');
        },
        {
            ...options ?? {}
        }
    );

    return queryState;
}


