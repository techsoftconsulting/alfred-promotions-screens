import FirestoreRestaurantRepository from '@modules/promotions/infrastructure/repositories/api-restaurant-repository';
import ApiRestaurantMallRepository
    from '@modules/promotions/infrastructure/repositories/api-restaurant-mall-repository';
import ApiPromotionRepository from '@modules/promotions/infrastructure/repositories/api-promotion-repository';
import InMemoryConfigRepo from '@modules/promotions/infrastructure/repositories/in-memory-config-repo';

const AppDataProvider = (userTokenId?: string) => {
    const configRepo = new InMemoryConfigRepo();
    return {
        RestaurantRepository: new FirestoreRestaurantRepository({
            configRepo
        }),
        RestaurantMallRepository: new ApiRestaurantMallRepository({}),
        PromotionRepository: new ApiPromotionRepository({
            configRepo
        })
    };
};

export default AppDataProvider;
