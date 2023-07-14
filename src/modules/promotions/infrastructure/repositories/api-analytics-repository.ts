import AppEvent from '@shared/domain/models/app-event';
import ObjectUtils from '@utils/misc/object-utils';
import APIRepository from '@shared/infrastructure/api/api-repository';

const COLLECTION_NAME = 'event-track';

export default class ApiAnalyticsRepository extends APIRepository {

    async save(item: AppEvent): Promise<void> {
        return this.create(COLLECTION_NAME, ObjectUtils.omitUnknown({
            ...item.toPrimitives(),
            event: item.eventName()
        }), true);
    }

}