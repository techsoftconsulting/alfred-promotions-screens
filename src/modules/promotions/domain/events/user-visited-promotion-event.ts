import AppEvent from '@shared/domain/models/app-event';

export const USER_VISITED_PROMOTION = 'USER_VISITED_PROMOTION';

export default class UserVisitedPromotionEvent extends AppEvent {

    eventName(): string {
        return USER_VISITED_PROMOTION;
    }

    get type(): string {
        return 'USER_ACTION';
    }

    toPrimitives() {
        return {
            ...this.props,
            type: this.type,
            name: this.eventName()
        };
    }

}