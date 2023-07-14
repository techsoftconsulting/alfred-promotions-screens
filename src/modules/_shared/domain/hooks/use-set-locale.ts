import { useContextSelector } from '@modules/_shared/infrastructure/utils/context-selector';
import { useCallback } from 'react';
import LocalizationContext from '../contexts/localization-provider-context';

export default function useSetLocale() {
    const { locale, changeLocale } = useContextSelector(
        LocalizationContext,
        (v) => v
    );

    const handleLocalizationChange = useCallback(
        (newLocale) => {
            changeLocale(newLocale);
        },
        [locale]
    );

    return handleLocalizationChange;
}
