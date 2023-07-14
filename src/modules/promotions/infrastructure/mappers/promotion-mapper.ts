import ObjectUtils from '@utils/misc/object-utils';
import Promotion from '@modules/promotions/domain/models/promotion';

export default class PromotionMapper {
    static toDomain(dto: any): Promotion {
        return Promotion.fromPrimitives({
            id: dto.id,
            imageUrl: dto.imageUrl,
            restaurantId: dto.storeId,
            description: dto.description,
            available: dto.available,
            duration: {
                start: dto.duration.start,
                end: dto.duration.end
            },
            mallsIds: dto.mallsIds ?? [],
            name: dto.name,
            createdAt: dto.createdAt,
            status: dto.status
        });
    }

    static toDomainFromArray(dtos: any[]): Promotion[] {
        return dtos.map(dto => PromotionMapper.toDomain(dto));
    }

    static toPersistence(restaurant: Promotion): any {
        const dto = restaurant.toPrimitives();

        return ObjectUtils.omitUnknown({
            id: dto.id,
            imageUrl: dto.imageUrl,
            available: dto.available,
            createdAt: dto.createdAt,
            mallsIds: dto.mallsIds,
            name: dto.name,
            status: dto.status,
            description: dto.description,
            duration: dto.duration
        });
    }


}