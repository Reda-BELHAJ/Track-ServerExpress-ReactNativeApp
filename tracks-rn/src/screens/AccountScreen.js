import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

import { MaterialIcons } from '@expo/vector-icons'; 

const AccountScreen = () => {
    const { signout }= useContext(AuthContext)

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
            <Text h2> My Account </Text>
            
            <Spacer>
                <Button
                    title="Sign Out"
                    onPress={signout}
                />
            </Spacer>
        </SafeAreaView>
        
    );
}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <MaterialIcons name="account-box" size={20} color="black" />
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40
    },
})

export default AccountScreen