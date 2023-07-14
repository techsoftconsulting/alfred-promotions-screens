import createContext from '@shared/infrastructure/utils/context-selector';

const EventsProviderContext = createContext<{
    publish: any;
    state: any;
}>(
    // @ts-ignore
    null
);

EventsProviderContext.displayName = 'EventsProviderContext';

export default EventsProviderContext;
