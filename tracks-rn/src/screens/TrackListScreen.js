import React, {useContext} from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Text, Button, ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import Spacer from '../components/Spacer'
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext)

    return (
        <>
            <NavigationEvents 
                onWillFocus={ fetchTracks } 
            />

            <Spacer>
                <FlatList
                    data={state}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id }) }>
                        <ListItem>
                            <ListItem.Content>
                            <ListItem.Title>{item.name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                        </TouchableOpacity>
                    );
                    }}
                />
            </Spacer>
        </>
    );
}

TrackListScreen.navigationOptions = {
    title: 'Tracks'
}

const styles = StyleSheet.create({})

export default TrackListScreen