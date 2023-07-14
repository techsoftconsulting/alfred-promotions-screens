import React from 'react';
import { BaseAddressAutocompleteInputProps } from './BaseAddressAutocompleteInputProps';
import { throttle } from 'lodash';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Autocomplete, Box, Grid, TextField, Typography } from '@mui/material';
import parse from 'autosuggest-highlight/parse';
import { useTheme } from '@shared/ui/theme/AppTheme';

const GOOGLE_MAPS_API_KEY = 'AIzaSyA9CgWUYybY15Pk4KlWRavcUVdSnir7LgI';

function loadScript(src: string, position: HTMLElement | null, id: string) {
    if (!position) {
        return;
    }

    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    position.appendChild(script);
}

const autocompleteService = { current: null };

interface MainTextMatchedSubstrings {
    offset: number;
    length: number;
}

interface StructuredFormatting {
    main_text: string;
    secondary_text: string;
    main_text_matched_substrings: readonly MainTextMatchedSubstrings[];
}

interface PlaceType {
    description: string;
    structured_formatting: StructuredFormatting;
}


export function BaseAddressAutocompleteInput(props: BaseAddressAutocompleteInputProps) {

    const [value, setValue] = React.useState<PlaceType | null>(null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState<readonly PlaceType[]>([]);
    const loaded = React.useRef(false);
    const theme = useTheme();

    /*if (typeof window !== 'undefined' && !loaded.current) {
        if (!document.querySelector('#google-maps')) {
            loadScript(
                `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
                document.querySelector('head'),
                'google-maps'
            );
        }

        loaded.current = true;
    }*/

    const fetch = React.useMemo(
        () =>
            throttle(
                (
                    request: { input: string },
                    callback: (results?: readonly PlaceType[]) => void
                ) => {
                    (autocompleteService.current as any).getPlacePredictions(
                        request,
                        callback
                    );
                },
                200
            ),
        []
    );

    React.useEffect(() => {
        if (!autocompleteService.current) return;
        const valueParsed = props.value ? JSON.parse(props.value) : {};
        const initialValue = valueParsed?.address ?? '';


        getOptions(initialValue).then(async (results) => {
            if (!results || results?.length == 0) {
                await onChange('');
                setInputValue('');
                return;
            }
            await onChange(results[0]);
            setInputValue(initialValue);
        });
    }, [props.value, autocompleteService]);

    async function getPlace(address) {

        try {
            const result = await window.fetch(`https://maps.google.com/maps/api/geocode/json?address=${address}&key=${GOOGLE_MAPS_API_KEY}`);

            const data = await result.json();

            if (!data) return;

            if (data.results.length == 0) return;

            const coords = data.results[0].geometry.location;

            const addressComponents = data.results[0].address_components;

            const country = addressComponents.find((comp) => {
                return comp.types.includes('country');
            })?.long_name;

            const countryCode = addressComponents?.find((comp) => {
                return comp.types.includes('country');
            })?.short_name;

            const city = addressComponents.find((comp) => {
                return comp.types.includes('locality');
            })?.long_name;

            const state = addressComponents.find((comp) => {
                return comp.types.includes('administrative_area_level_1');
            })?.long_name;

            const postalCode = addressComponents.find((comp) => {
                return comp.types.includes('postal_code');
            })?.long_name;

            const streetNumber = addressComponents.find((comp) => {
                return comp.types.includes('street_number');
            })?.long_name;

            const route = addressComponents.find((comp) => {
                return comp.types.includes('route');
            })?.long_name;

            const neighborhood = addressComponents.find((comp) => {
                return comp.types.includes('neighborhood');
            })?.long_name;

            const line1 = [country, postalCode, state, city, route, streetNumber].reduce((address, item) => {
                if (!item) return address;
                if (!address) return item;
                return address + ', ' + item;
            }, '');

            const line2 = [neighborhood].reduce((address, item) => {
                if (!item) return address;
                if (!address) return item;
                return address + ', ' + item;
            }, '');

            return {
                line1,
                line2,
                city,
                state,
                country: countryCode,
                latitude: coords.lat,
                longitude: coords.lng
            };
        } catch (e) {
            return null;
        }

    }

    async function getOptions(textHint: string) {
        return new Promise((resolve, reject) => {
            fetch({ input: textHint }, (results?: readonly PlaceType[]) => {
                resolve(results);
            });
        });
    }

    React.useEffect(() => {
        let active = true;

        if (!autocompleteService.current && (window as any).google) {
            autocompleteService.current = new (
                window as any
            ).google.maps.places.AutocompleteService();
        }

        if (!autocompleteService.current) {
            return undefined;
        }

        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }

        getOptions(inputValue).then((results) => {
            if (active) {
                let newOptions: readonly PlaceType[] = [];

                if (value) {
                    newOptions = [value];
                }

                if (results) {
                    newOptions = [...newOptions, ...results];
                }

                setOptions(newOptions);
            }
        });

        return () => {
            active = false;
        };
    }, [value, inputValue, fetch]);

    async function onChange(newValue: PlaceType | null) {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);

        if (!newValue) {
            props.onChange?.('');
            return;
        }

        if (!newValue?.description) return;

        const coords = await getPlace(newValue?.description);

        props.onChange?.(JSON.stringify({
            address: newValue!.description,
            coords: coords
        }));
    }

    return (

        <Autocomplete
            getOptionLabel={(option) =>
                typeof option === 'string' ? option : option.description
            }
            filterOptions={(x) => x}
            options={options}
            autoComplete
            size='small'
            includeInputInList
            disabled={props.disabled}
            error={!!props.error}
            helperText={props.error}
            filterSelectedOptions
            value={value}
            onChange={async (event: any, newValue: PlaceType | null) => {
                await onChange(newValue);
            }}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            renderInput={(params) => (
                <TextField  {...params}
                    fullWidth
                    error={props.error}
                    style={{
                        height: 40,
                        borderRadius: 20
                    }}
                    InputProps={{
                        ...params.InputProps,
                        style: {}
                    }}
                />
            )}
            renderOption={(props, option) => {

                const matches = option?.structured_formatting?.main_text_matched_substrings;
                const parts = parse(
                    option.structured_formatting.main_text,
                    matches.map((match: any) => [match.offset, match.offset + match.length])
                );

                return (
                    <li {...props}>
                        <Grid
                            container
                            alignItems='center'
                        >
                            <Grid item>
                                <Box
                                    component={LocationOnIcon}
                                    sx={{ color: 'text.secondary', mr: 2 }}
                                />
                            </Grid>
                            <Grid
                                item
                                xs
                            >
                                {parts.map((part, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            color: part.highlight ? theme.colors.primaryMain : theme.colors.textColor,
                                            fontWeight: part.highlight ? 700 : 400
                                        }}
                                    >
                                    {part.text}
                                  </span>
                                ))}
                                <Typography
                                    variant='body2'
                                    color='text.secondary'
                                >
                                    {option.structured_formatting.secondary_text}
                                </Typography>
                            </Grid>
                        </Grid>
                    </li>
                );
            }}
        />
    );

}
