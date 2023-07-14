import Product from '@modules/promotions/domain/models/product';

export default interface ProductRepository {

    find(id: string): Promise<Product | null>;

    findAll(filters: any): Promise<Product[]>;
}