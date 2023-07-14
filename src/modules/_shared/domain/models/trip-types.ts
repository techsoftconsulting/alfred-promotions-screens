export type GeoCoordinates = number[];

export type TripMeasurement = {
    value: number;
    text: string;
};

export type TripGeoPoint = {
    address: string;
    geoLocation: GeoCoordinates;
};

export type ActiveTripRoute = {
    origin: TripGeoPoint;
    destination: TripGeoPoint;
    distance: TripMeasurement;
    duration: TripMeasurement;
    completed: boolean;
};

export type RequestInfo = {
    origin: TripGeoPoint;
    destination: TripGeoPoint;
    serviceType: string;
};
