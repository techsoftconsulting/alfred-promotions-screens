import * as enFile from '@assets/locales/en/translations';
import Translator from '@modules/_shared/domain/services/translator';
import i18n from 'i18n-js';
import memoize from 'lodash/memoize';
import {I18nManager} from 'react-native';

export default class DefaultTranslator implements Translator {
    translate(key: string, locale: string, options?: any): string {
        return translate(key, {locale, ...options});
    }
}

export const DEFAULT_LANGUAGE = 'en';

const translationGetters: { [c: string]: any } = {
    // lazy requires (metro bundler does not support symlinks)
    en: () => enFile.default, //require("../../../assets/locales/en/translations.json"),
    nl: () => nlFile.default // require("../../../assets/locales/nl/translations.json"),
};

const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key)
);

export const setI18nConfig = (codeLang: string) => {
    // fallback if no available language fits
    const fallback = {languageTag: DEFAULT_LANGUAGE, isRTL: false};
    const lang = codeLang ? {languageTag: codeLang, isRTL: false} : null;

    const {languageTag, isRTL} = lang ? lang : fallback;

    // clear translation cache
    if (translate.cache && translate.cache.clear) {
        translate.cache.clear();
    }

    // update layout direction
    I18nManager.forceRTL(isRTL);
    // set i18n-js config
    i18n.translations = {
        [languageTag as string]: translationGetters[languageTag as string]()
    };

    i18n.locale = languageTag as string;

    return languageTag;
};
