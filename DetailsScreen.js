import React, { useState } from "react";
import { Button, View, ImageBackground, Text, StyleSheet, TouchableOpacity, Image, TextInput, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function SignUp({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const logindata = () => {
        if (!email) {
            alert('Please fill Email');
            return;
        }
        if (!password) {
            alert('Please fill Password');
            return;
        }
        console.log(email);
        console.log(password);
        setPassword('');
        setEmail('');
    }
    return (
        <ImageBackground source={require('./assets/images/backgound.jpg')} style={{ height: '100%' }} >
            <View style={styles.container}>
                <Text style={{ textAlign: 'center', color: '#F5F5F5', letterSpacing: 3, marginBottom: 40, paddingRight: 30, fontSize: 35 }}>REGISTER</Text>
                <View style={styles.headerWrapper}>
                    <TextInput
                        style={styles.header}
                        value={email}
                        placeholder="U S E R N A M E"
                        placeholderTextColor="#BFDCE5"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <View style={styles.headerWrapper}>
                    <TextInput
                        style={styles.header}
                        value={password}
                        placeholder="P A S S W O R D"
                        placeholderTextColor="#BFDCE5"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text onPress={() => logindata()} style={styles.loginText}>REGISTER</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={() => navigation.navigate('SignIn')} style={styles.forgot_button}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        resizeMode: 'cover',
        height: 450,
        width: 320,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(0,0,0,0.6)',
        marginBottom: 190,
        marginTop: 190,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 30,
        borderRadius: 15,
    },
    headerWrapper: {
        borderBottomColor: '#13eaed',
        borderBottomWidth: 3,
        marginBottom: 15,
        width: '80%',
    },
    header: {
        fontSize: 15,
        color: 'white',
    },
    forgot_button: {
        height: 30,
        marginBottom: 10,
        color: '#EEEEEE',
        marginTop: 40,
        marginRight: 45
    },
    loginBtn: {
        width: "25%",
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#00E7FF",
        marginRight: 45,
        color: 'white'
    }
});