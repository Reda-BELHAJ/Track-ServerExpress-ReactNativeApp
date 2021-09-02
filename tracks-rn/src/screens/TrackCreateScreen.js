import '../_mockLocations';
import React, { useContext, useCallback } from "react";
import { StyleSheet,SafeAreaView } from "react-native";
import { Text } from 'react-native-elements';
import { withNavigationFocus } from 'react-navigation'
import Map from "../components/Map";
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import Spacer from '../components/Spacer';

import { Entypo } from '@expo/vector-icons'; 

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);

    const callback = useCallback(location => {
        addLocation(location, recording)
    }, [recording])

    const [ err ] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
            <Text h2> Create a Track </Text>

            <Spacer><Map /></Spacer>

            { err ? <Text> Please enable location services </Text> : null }

            <TrackForm />
        </SafeAreaView>
    );
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <Entypo name="squared-plus" size={20} color="black" />
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40
    },
})

export default withNavigationFocus(TrackCreateScreen);