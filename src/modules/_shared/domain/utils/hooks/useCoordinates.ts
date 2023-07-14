import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { ENV } from '@shared/infrastructure/utils/get-envs';


export default function useCoordinates(address: string) {
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState<any>(undefined);

    useEffect(() => {
        (async () => {
            /*  if (!location) {*/


            if (Platform.OS == 'web') {
                Location.setGoogleApiKey(ENV.GOOGLE_MAPS_API_KEY);
            }

            if (Platform.OS !== 'web') {
                const { status } = await Permissions.askAsync(
                    Permissions.LOCATION_FOREGROUND
                );

                if (status !== 'granted') {
                    throw new Error('Permmission denied');
                }
            }

            let foundLocation = address
                ? await Location.geocodeAsync(address)
                : null;

            setLoading(false);
            const firstLocation = foundLocation
                ? foundLocation.pop()
                : null;

            if (firstLocation) {
                setLocation({
                    latitude: firstLocation.latitude,
                    longitude: firstLocation.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                });
            }
            /*  }*/
        })();
    }, [address]);

    return {
        location: location ?? {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0
        },
        loading: loading
    };
}
