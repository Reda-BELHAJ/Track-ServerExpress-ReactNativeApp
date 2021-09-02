import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignInScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext)

    return (
        <View style={styles.containerStyle}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage}
            />

            <AuthForm
                headerText='Sign In to Your Account'
                errorMessage={state.errorMessage}
                submitBtnText='Sign In'
                onSubmit={signin}
            />

            <NavLink
                text="Don't have an Account? Go back to Sign Up"
                routeName="SignUp"
                navigation={ navigation }
            />
        </View>
    );
}

SignInScreen.navigationOptions = () => {
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

export default SignInScreen