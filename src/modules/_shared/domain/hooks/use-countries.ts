import locales from '../../infrastructure/locales/locales';

export function useCountries() {
    const countries = locales.countries;
    const languages = locales.languages;

    function findCountries(countryCodes: string[]) {
        return countries.filter((country) => {
            return countryCodes.includes(country.code);
        });
    }

    return { countries, languages, findCountries };
}

