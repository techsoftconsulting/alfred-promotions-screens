import React from 'react';
import { BaseAddressAutocompleteInputProps } from './BaseAddressAutocompleteInputProps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useTheme } from '@modules/_shared/ui/theme/AppTheme';

export function BaseAddressAutocompleteInput(props: BaseAddressAutocompleteInputProps) {
    const theme = useTheme();

    return (
        <GooglePlacesAutocomplete
            {...props}
            minLength={2} // minimum length of text to search
            autoFocus={false}
            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            listViewDisplayed='auto' // true/false/undefined
            fetchDetails={true}
            renderDescription={row => row.description} // custom description render
            onPress={(data, details = null) => {
                console.log(details);
            }}
            getDefaultValue={() => {
                return ''; // text input default value
            }}
            query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: 'AIzaSyDOJM4bdpX3wXWQyx1m5mkQCFohWn1S7pI', //CHANGE THIS,
                language: 'es' // language of the results
            }}
            styles={{
                textInputContainer: {
                    elevation: 0,
                    border: 0,
                    borderRadius: 0
                },
                textInput: {
                    elevation: 0,
                    border: 0,
                    borderRadius: 0,
                    marginBottom: 0,
                    outline: 'none',
                    paddingHorizontal: theme.spacing.m,
                    paddingVertical: 0,
                    height: 40,
                    fontFamily: theme.textVariants.body.fontFamily,
                    fontSize: theme.textVariants.body.fontSize,
                    backgroundColor: 'transparent'
                },
                description: {
                    fontWeight: 'bold'
                },
                predefinedPlacesDescription: {
                    color: '#1faadb'
                }
            }}
            debounce={200}
        />
    );
}
