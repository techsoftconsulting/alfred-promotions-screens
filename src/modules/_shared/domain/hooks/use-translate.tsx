import Translator from '@modules/_shared/domain/services/translator';
import { useContextSelector } from '@modules/_shared/infrastructure/utils/context-selector';
import LocalizationContext from '../contexts/localization-provider-context';
import useService from './use-service';

export default function useTranslate() {
    const provider = useContextSelector(LocalizationContext, (v) => v);
    const translator = useService<Translator>('Translator');

    return (text: string, options?: any): string => {
        return translator.translate(text, provider.locale, options);
    };
}
