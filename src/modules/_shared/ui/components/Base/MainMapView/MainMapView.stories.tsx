import React from 'react';
import { MainMapView } from '.';
import { Box } from '../Box';

export default {
    title: 'Global/Base/MainMapView',
    component: MainMapView,
    argTypes: {
        initialRegion: {
            name: 'initialRegion',
            defaultValue: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            description: 'Default location coordinates when address is empty'
        },
        address: {
            name: 'address',
            description: 'Google address',
            defaultValue: 'Boom, Antwerp, Belgium'
        },
        markerTitle: {
            name: 'markerTitle',
            defaultValue: 'My location',
            description: 'Marker title'
        },
        style: {
            defaultValue: {
                width: '100%',
                height: 200
            }
        }
    }
};

export const Basic = (args) => {
    return (
        <Box height={400}>
            <MainMapView {...args} />
        </Box>
    );
};

Basic.args = {};
