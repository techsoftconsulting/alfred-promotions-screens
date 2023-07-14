import { useCallback } from 'react';
import AppEvent from '@shared/domain/models/app-event';
import useEventsProvider from '@shared/domain/hooks/use-events-provider';

export default function useEventBus() {
    const dispatchEv = useEventsProvider((state) => state.publish);
    return {
        publish: useCallback(
            (
                event: AppEvent
            ) => {
                dispatchEv(event);
            },
            [dispatchEv]
        )
    };
};

