import { useContextSelector } from '@modules/_shared/infrastructure/utils/context-selector';
import UtilsProviderContext from '../contexts/utils-provider-context';
import { AppUtils } from '../models/app-utils';

export function useUtils() {
    const { utils } = useContextSelector(UtilsProviderContext, (v) => v);

    return utils as AppUtils;
}
