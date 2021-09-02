import React, { useContext } from 'react';
import { View, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext) 

    if (!currentLocation){
        return <ActivityIndicator 
                    size='large' 
                    style={{ marginTop: 150 }}
                    color='black'
                />;
    }

    return (
        <View>
            <MapView 
                style={styles.mapStyle}
                initialRegion={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            >
                <Circle
                    center={currentLocation.coords}
                    radius={30}
                    strokeColor='rgba(93, 58, 207, 1.0)'
                    fillColor='rgba(93, 58, 207, 0.3)'
                />
                <Polyline
                    coordinates={locations.map((loc) => loc.coords)}
                    strokeWidth={6}
                    lineDashPattern={[0]}
                ></Polyline>
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    mapStyle: {
        height: 300
    }
})

export default Map