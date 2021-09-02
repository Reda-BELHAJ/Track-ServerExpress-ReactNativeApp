import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from 'react-native-maps';
import Spacer from "../components/Spacer";

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext)
    const _id = navigation.getParam('_id');

    const track = state.find(item => item._id === _id );
    const initialCoords = track.locations[0].coords;

    return (
        <>
            <Spacer>
                <Text h3>
                    { track.name }
                </Text>
            </Spacer>
            
            <Spacer>
                <MapView
                    initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                    }}
                    style={styles.mapStyle}
                >
                    <Polyline 
                        coordinates={track.locations.map(loc => loc.coords)} 
                        strokeWidth={6}
                        lineDashPattern={[0]}
                    />
            </MapView>
            </Spacer>
            
        </>
    );
}

TrackDetailScreen.navigationOptions = {
    title: 'Track' 
}

const styles = StyleSheet.create({
    mapStyle: {
        height: 300
    }
})

export default TrackDetailScreen