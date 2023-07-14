import React from 'react';
import AppEvent from '@shared/domain/models/app-event';
import ObjectUtils from '@utils/misc/object-utils';
import ApiAnalyticsRepository from '@modules/promotions/infrastructure/repositories/api-analytics-repository';
import useFindConfigurations from '@modules/promotions/application/config/use-find-configurations';
import UserVisitedPromotionEvent, { USER_VISITED_PROMOTION } from '@modules/promotions/domain/events/user-visited-promotion-event';

type HandlerParams = {}

const eventHandlers = {
    [USER_VISITED_PROMOTION]: (event: UserVisitedPromotionEvent, params: HandlerParams) => {
        storeEvent(event, params);
    }
};

function storeEvent(event: any, params: HandlerParams) {
    const repo = new ApiAnalyticsRepository({});
    /*   if (__DEV__) {
           console.log(`New ${event.eventName()}`);
           return;
       }*/

    try {
        event.updateData(ObjectUtils.omitUnknown({
            ...event.data,
            ...params
        }));
        repo.save(event);
    } catch (e) {

    }
}

export default function useSimpleEventBus() {
    const { loading, data: config } = useFindConfigurations();

    const [state, dispatch] = React.useReducer(
        (prevState: any, event: AppEvent) => {
            if (!config) return { ...prevState };
            // @ts-ignore
            const handler = !config?.mallId ? null : eventHandlers[event.eventName()];

            if (!handler) return { ...prevState };

            handler?.(event, {
                mallId: config.mallId
            });

            return { ...prevState };
        },
        {}
    );

    return {
        state,
        publish: dispatch
    };
}