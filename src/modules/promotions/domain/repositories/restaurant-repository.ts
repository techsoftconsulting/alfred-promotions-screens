import Restaurant from '@modules/promotions/domain/models/restaurant';

export default interface RestaurantRepository {
    find(id: string): Promise<Restaurant | null>;

    findAll(filters?: any): Promise<Restaurant[]>;
}