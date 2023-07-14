import createContext from '@modules/_shared/infrastructure/utils/context-selector';

const DataProviderContext = createContext<any>(null);

DataProviderContext.displayName = 'DataProviderContext';

export default DataProviderContext;
