import React from 'react';
import { CountryAutocompleteArrayInputProps } from './CountryAutocompleteArrayInputProps';
import AutocompleteArrayInput from '@main-components/Form/inputs/AutocompleteArrayInput';
import { useCountries } from '@modules/_shared/domain/hooks/use-countries';

export function CountryAutocompleteArrayInput(props: CountryAutocompleteArrayInputProps) {
    const { countries } = useCountries();

    return (
        <AutocompleteArrayInput
            {...props}
            choices={countries.map((country) => {
                return {
                    id: country.code,
                    name: country.name
                };
            })}
        />
    );
}
