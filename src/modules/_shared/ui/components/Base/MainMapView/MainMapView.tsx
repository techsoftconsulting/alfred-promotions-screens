import useCoordinates from '@modules/_shared/domain/utils/hooks/useCoordinates';
import React from 'react';
import {Platform} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {MainMapViewProps} from './MainMapViewProps';

const MapMarker = Platform.OS == 'web' ? MapView.Marker : Marker;

export function MainMapView(props: MainMapViewProps) {

    const addressCoordinates = props.address
        ? useCoordinates(props.address)
        : undefined;


    const renderMarkers = () => {
        if (!addressCoordinates) {
            return null;
        }

        const {location} = addressCoordinates;
        
        return (
            <MapMarker
                key={JSON.stringify(props)}
                coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude
                }}
                title={props.markerTitle ?? 'Location'}
                description={props.address}
            />
        );
    };

    return (
        <MapView
            {...props}
            style={{height: '100%', width: '100%'}}
            region={addressCoordinates?.location}
            loadingEnabled
        >
            {renderMarkers()}
        </MapView>
    );
}
