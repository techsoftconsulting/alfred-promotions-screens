import createContext from '@modules/_shared/infrastructure/utils/context-selector';

interface LocalizationContextProps {
    t: (scope: string, options?: any) => string;
    locale: 'en';
    changeLocale: any;
}

const defaultValue: LocalizationContextProps = {
    t: (scope: string, options?: any) => {
        return '';
    },
    locale: 'en',
    changeLocale: () => {}
};

const LocalizationContext = createContext(defaultValue);

export default LocalizationContext;
