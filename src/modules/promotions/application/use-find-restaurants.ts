import useService from '@shared/domain/hooks/use-service';
import UseQueryValue from '@shared/domain/models/use-query-value';
import QueryCreator from '@shared/domain/services/query-creator';
import useRepository from '@shared/domain/hooks/use-repository';
import QueryOptions from '@shared/domain/models/query-options';
import Restaurant from '@modules/promotions/domain/models/restaurant';
import RestaurantRepository from '@modules/promotions/domain/repositories/restaurant-repository';

type ResponseQueryValue = Omit<UseQueryValue, 'data'> & {
    data?: Restaurant[];
};

export default function useFindRestaurants(filters?: any, options?: QueryOptions): ResponseQueryValue {
    const repo = useRepository<RestaurantRepository>(
        'RestaurantRepository'
    );
    const queryCreator = useService<QueryCreator>('QueryCreator');

    const queryState: ResponseQueryValue = queryCreator.execute(
        {
            id: 'restaurants',
            payload: {
                ...filters
            },
            type: ''
        },
        () => repo.findAll(filters),
        {
            ...options ?? {}
        }
    );

    return queryState;
}
