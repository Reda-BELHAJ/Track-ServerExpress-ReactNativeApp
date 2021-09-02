import * as Location from 'expo-location'

const tenMetersWithDegrees = 0.0001;

const getLocations = increment => {
    return {
        timeStamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: -6.9172322 + increment * tenMetersWithDegrees,
            latitude: 33.9217956 + increment * tenMetersWithDegrees
        }
    };
}

let counter = 0;

setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocations(counter)
    });
    counter++;
}, 1000);