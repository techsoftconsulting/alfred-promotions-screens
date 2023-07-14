import useService from '@shared/domain/hooks/use-service';
import UseQueryValue from '@shared/domain/models/use-query-value';
import QueryCreator from '@shared/domain/services/query-creator';
import useRepository from '@shared/domain/hooks/use-repository';
import QueryOptions from '@shared/domain/models/query-options';
import RestaurantMallRepository from '@modules/promotions/domain/repositories/restaurant-mall-repository';
import RestaurantMall from '@modules/promotions/domain/models/restaurant-mall';

type ResponseQueryValue = Omit<UseQueryValue, 'data'> & {
    data?: RestaurantMall[];
};

export default function useFindRestaurantMalls(options?: QueryOptions): ResponseQueryValue {
    const repo = useRepository<RestaurantMallRepository>(
        'RestaurantMallRepository'
    );
    const queryCreator = useService<QueryCreator>('QueryCreator');

    const queryState: ResponseQueryValue = queryCreator.execute(
        {
            id: 'restaurant-malls',
            payload: {},
            type: ''
        },
        () => repo.findAll(),
        {
            ...options ?? {}
        }
    );

    return queryState;
}
