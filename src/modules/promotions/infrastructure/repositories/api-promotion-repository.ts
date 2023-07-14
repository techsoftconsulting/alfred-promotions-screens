import Promotion from '@modules/promotions/domain/models/promotion';
import PromotionMapper from '@modules/promotions/infrastructure/mappers/promotion-mapper';
import PromotionRepository from '@modules/promotions/domain/repositories/promotion-repository';
import InMemoryConfigRepo from '@modules/promotions/infrastructure/repositories/in-memory-config-repo';
import ArrayUtils from '@utils/misc/array-utils';
import APIRepository from '@shared/infrastructure/api/api-repository';

const COLLECTION_NAME = 'promotion';

interface Props {
    configRepo: InMemoryConfigRepo;
}

export default class ApiPromotionRepository extends APIRepository implements PromotionRepository {

    constructor(private props: Props) {
        super();
    }

    async findAll(filters?: any): Promise<Promotion[]> {

        const defaultFilters = [
            {
                field: 'status',
                operator: '==',
                value: 'ACTIVE'
            },
            {
                field: 'type',
                operator: '==',
                value: 'VENDOR'
            },
            {
                field: 'durationEnd',
                operator: '>=',
                value: new Date()
            }
        ];
        const config = await this.props.configRepo.getDoc('alfred', 'configurations');

        if (!config?.mallId) return [];

        defaultFilters.push({
            field: 'mallsIds',
            operator: 'array-contains',
            value: config.mallId
        });


        defaultFilters.push({
            field: 'available',
            operator: '==',
            value: true
        });


        const docs: any = await this.findByCriteriaRequest(COLLECTION_NAME, defaultFilters, undefined, undefined, true);

        if (filters.query && filters.query?.trim() !== '') {
            const filteredDocs = ArrayUtils.filterLike(
                docs,
                'name',
                filters.query
            );

            const filtered2Docs = ArrayUtils.filterLike(
                docs,
                'description',
                filters.query
            );

            return PromotionMapper.toDomainFromArray(ArrayUtils.uniqBy([
                ...filteredDocs,
                ...filtered2Docs
            ], ['id']));
        }


        return PromotionMapper.toDomainFromArray(docs);
    }


    async find(id: string): Promise<Promotion | null> {
        const doc: any = await this.get(`${COLLECTION_NAME}/${id}`, true);

        if (!doc) return null;
        return PromotionMapper.toDomain(doc);
    }


}