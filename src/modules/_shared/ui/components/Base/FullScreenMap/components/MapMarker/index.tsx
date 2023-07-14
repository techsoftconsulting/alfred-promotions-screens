import React from 'react';
import { LayoutChangeEvent } from 'react-native';
import { Marker } from 'react-native-maps';
import GeoPoint from '@shared/domain/models/geo-point';

const BaseMapMarker = Marker;

interface MapMarkerProps {
    coordinates: GeoPoint;
    title?: string;
    description?: string;
    children?: any; // JSX.Element;
    style?: any;
    onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
    onPress: any;
}

export function MapMarker(props: MapMarkerProps, ref) {
    return (
            <BaseMapMarker
                    ref={ref ? ref : {}}
                    coordinate={props.coordinates}
                    title={props.title}
                    description={props.description}
                    style={props.style}
                    onLayout={props.onLayout}
                    onPress={props?.onPress}
            >
                {props.children}
            </BaseMapMarker>
    );
}

export function MapCallout(props) {
    return <Marker {...props} />;
}

export default React.forwardRef(MapMarker);
