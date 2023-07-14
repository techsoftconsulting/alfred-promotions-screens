import { StyleProp, ViewStyle } from 'react-native';

export interface Region {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

export interface LatLng {
    latitude: number;
    longitude: number;
}

export interface Point {
    x: number;
    y: number;
}

export interface MainMapViewProps {
    initialRegion: Region;
    address?: string;
    coords: {
        latitude: number;
        longitude: number;
    };
    style?: StyleProp<ViewStyle>;
    markerTitle?: string;
}
