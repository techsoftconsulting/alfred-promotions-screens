import createContext from '@modules/_shared/infrastructure/utils/context-selector';
import { AppUtils } from '../models/app-utils';

const UtilsProviderContext = createContext<{
    utils: AppUtils;
}>(
    // @ts-ignore
    null
);

UtilsProviderContext.displayName = 'UtilsProviderContext';

export default UtilsProviderContext;
