import useService from '@shared/domain/hooks/use-service';
import UseQueryValue from '@shared/domain/models/use-query-value';
import QueryCreator from '@shared/domain/services/query-creator';
import useRepository from '@shared/domain/hooks/use-repository';
import QueryOptions from '@shared/domain/models/query-options';
import PromotionRepository from '@modules/promotions/domain/repositories/promotion-repository';
import Promotion from '@modules/promotions/domain/models/promotion';

type ResponseQueryValue = Omit<UseQueryValue, 'data'> & {
    data?: Promotion;
};

export default function useFindPromotion(id: string, options?: QueryOptions): ResponseQueryValue {
    const repo = useRepository<PromotionRepository>(
        'PromotionRepository'
    );
    const queryCreator = useService<QueryCreator>('QueryCreator');

    const queryState: ResponseQueryValue = queryCreator.execute(
        {
            id: 'promotions',
            payload: {
                id
            },
            type: 'get'
        },
        () => repo.find(id),
        {
            ...options ?? {}
        }
    );

    return queryState;
}
