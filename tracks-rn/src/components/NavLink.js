import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Spacer from './Spacer'
import { withNavigation } from "react-navigation";

const NavLink = ({
    navigation,
    text,
    routeName
}) => {

    return (
        <TouchableOpacity onPress={() => {navigation.navigate(routeName)}}>
            <Spacer>
                <Text style={styles.linkStyle}> { text } </Text>
            </Spacer>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    linkStyle: {
        color: '#007AFF'
    }
})

export default withNavigation(NavLink)