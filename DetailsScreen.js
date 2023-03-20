import React, { useState, useEffect } from "react";
import { Button, View, ImageBackground, Text, StyleSheet, TouchableOpacity, Image, TextInput, StatusBar, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { useLogin } from './LoginProvider';

export function SignUp({ navigation }) {
    const { setIsLoggedIn, SubMenu, setSubMenu } = useLogin();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [fillName, setFillName] = useState(false)
    const [fillPassword, setFillPassword] = useState(false)

    const [successful, setSuccessful] = useState(false)
    const [valid, setValid] = useState(false)
    const [data, setData] = useState([{ title: 'First Title' }]);
    const useFetch = () => {
        fetch('http://192.168.220.220/user/', {
            method: 'GET'
        })
            .then(res => res.json())
            // .then(data => { setData(data)})
            .then(data => {
                // console.log(data)
                setData(data)
            })

            .catch(err => console.log("Error Acquired", err));
    }
 

    useEffect(() => {
        useFetch()
    }, [])

    const fetchApi = async () => {
        // const obj = {
        //     "username": "kandhan",
        //     "password": "123456"
        // };
        console.log('update butoon pressed...')
        if (!username) {
            // console.log("Please fill Email")
            // alert('Please fill Email');
            setFillName(true)
        }
        else {
            setFillName(false)

        }
        if (!password) {
            // console.log("Please fill Password")
            // alert('Please fill Password');
            setFillPassword(true)
        }
        else {
            setFillPassword(false)

        }
        // const myJSON = JSON.stringify({ username, password });

        if (username) {
            data.map(async (item) => {
                console.log(item.username, item.password)
                if (item.username === username) {
                    setValid(false)
                    Alert.alert("User Already Exist", "Please Enter New Username")
                }
                else {
                    setValid(true)
                    console.log("new user")
                }
            })
        }
        if (valid) {
            const options = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            };

            try {
                const response = await fetch('http://192.168.220.220/user/', options);
                const responseData = await response.json();
                console.log(responseData);
                setSuccessful(true)
                setUserName("")
                setPassword("")


            } catch (error) {
                console.error(error);
            }
            console.log("Enter User is New User...")
        }


    }
    return (
        <View style={{ flex: 1, backgroundColor: '#3C6255' }}>
            <View style={styles.container}>
                <Text style={{ textAlign: 'center', color: '#F5F5F5', letterSpacing: 3, marginBottom: 40, fontSize: 35 }}>REGISTER</Text>
                <View style={styles.headerWrapper}>
                    <TextInput
                        style={styles.header}
                        value={username}
                        placeholder="U S E R N A M E"
                        placeholderTextColor="white"
                        onChangeText={(text) => setUserName(text)}
                    />
                    {fillName ?
                        <Text style={{ color: 'red', left: 0, letterSpacing: 2 }}>enter the username</Text>
                        : null
                    }

                </View>
                <View>

                </View>
                <View style={styles.headerWrapper}>
                    <TextInput
                        style={styles.header}
                        value={password}
                        placeholder="P A S S W O R D"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                    />
                    {fillPassword ?
                        <Text style={{ color: 'red', left: 0, letterSpacing: 2 }}>enter the password</Text>
                        : null
                    }
                </View>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text onPress={() => fetchApi()} style={styles.loginText}>REGISTER</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={() => navigation.navigate('SignIn')} style={styles.signupButton}>LOGIN</Text>
                </TouchableOpacity>
                {
                    successful ?
                        <Text style={styles.loginText}>Your registration was successful.</Text>
                        : null
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        resizeMode: 'cover',
        height: 450,
        width: 320,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(0,0,0,0.3)',
        marginBottom: 190,
        marginTop: 150,
        marginLeft: 30,
        marginRight: 30,
        // paddingLeft: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black',
    },
    headerWrapper: {
      
        marginBottom: 15,
        width: 250,
    },
    header: {
        fontSize: 15,
        color: 'white',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    loginBtn: {
        width: 100,
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: '#5B8FB9',
        // marginRight: 45,
        color: 'white'
    },
    signupButton: {
        height: 30,
        marginBottom: 10,
        color: '#EEEEEE',
        marginTop: 40,
        // marginRight: 45,
        fontWeight: 'bold'
    },
    loginText: {
        color: 'white',
    }
});