import createContext from '@modules/_shared/infrastructure/utils/context-selector';

const LayoutContext = createContext<any>(null);

LayoutContext.displayName = 'LayoutContext';

export default LayoutContext;
