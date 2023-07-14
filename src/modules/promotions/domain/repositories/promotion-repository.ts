import Promotion from '@modules/promotions/domain/models/promotion';

export default interface PromotionRepository {

    find(id: string): Promise<Promotion | null>;

    findAll(filters: any): Promise<Promotion[]>;
}