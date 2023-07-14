import createContext from '@modules/_shared/infrastructure/utils/context-selector';

const ServiceProviderContext = createContext<any>(null);

ServiceProviderContext.displayName = 'ServiceProviderContext';

export default ServiceProviderContext;
