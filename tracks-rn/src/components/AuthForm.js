import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from './Spacer'

const AuthForm = ({
    headerText,
    errorMessage,
    onSubmit,
    submitBtnText
}) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    return (
        <>
            <Spacer>
                <Text h3>{ headerText }</Text>
            </Spacer>

            <View style={{ marginHorizontal: 15 }}>
                <Input 
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <Input
                    secureTextEntry={true}
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>

            {errorMessage ? <Text style={styles.errorStyle}> { errorMessage } </Text> : null}

            <Spacer>
                <Button 
                    title={submitBtnText}
                    onPress={() => onSubmit({ email, password })}
                />
            </Spacer>
        </>
    );
}

const styles = StyleSheet.create({
    errorStyle: {
        color: 'red',
        marginHorizontal: 15,
        fontSize: 15
    }
})

export default AuthForm