import React, { useContext } from "react";
import { NavigationEvents } from "react-navigation";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignUpScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext)

    return (
        <View style={styles.containerStyle}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage}
            />
            
            <AuthForm
                headerText='Sign Up For Tracker'
                errorMessage={state.errorMessage}
                submitBtnText='Sign Up'
                onSubmit={signup}
            />

            <NavLink
                text="Already have an Account? Sign in instead"
                routeName="SignIn"
                navigation={ navigation }
            />
        </View>
    );
}

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
})

export default SignUpScreen