import React, { useState, useEffect } from "react";
import { Button, View, ImageBackground, Text, StyleSheet, TouchableOpacity, Image, TextInput, StatusBar, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useLogin } from './LoginProvider';
import axios from 'axios';
import * as RNFS from 'react-native-fs';

export function SignIn({ navigation }) {
    const { setIsLoggedIn, SubMenu, setSubMenu } = useLogin();

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState(false)
    const [fillName, setFillName] = useState(false)
    const [noUser, setNoUser] = useState(false)

    const [fillPassword, setFillPassword] = useState(false)
    const [data, setData] = useState([{ title: 'First Title' }, { title: 'Second Title' }, { title: 'Third Title' }]);
    const [title, setTitle] = useState({ title: 'First Title' })
    const [description, setDescription] = useState({ description: 'Hello Description' })

    // useEffect(() => {
    //     fetch('http://192.168.220.220/user/', {
    //         method: 'GET'
    //     })
    //         .then(res => res.json())
    //         // .then(data => { setData(data)})
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })

    //         .catch(err => console.log("Error Acquired", err));
    // }, [])
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
    // const logindata = () => {
    //     console.log(email);
    //     console.log(password);
    //     setEmail('');
    //     setPassword('');
    //     if (!email) {
    //         alert('Please fill Email');
    //         return;
    //     }
    //     if (!password) {
    //         alert('Please fill Password');
    //         return;
    //     }
    //     RNFS.readFileAssets('test.json')
    //         .then(result => {
    //             const data = result;
    //             const obj = JSON.parse(data);
    //             if (email == obj.user1.username && password == obj.user1.password) {
    //                 setIsLoggedIn(true)
    //                 console.log('Entering the user1');
    //             }
    //             else {
    //                 alert("username is not  valid");
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }
    const checker = () => {
        console.log(username, password)
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
        if (username && password) {
            console.log('username and password all enterd...')
            setValid(true)
        }

        if (valid) {
            // useFetch()
            // console.log(username, password)
            data.map((item) => {
                console.log(item.username, item.password)
                if (item.username == username && item.password == password) {
                    console.log("user Entered the App...")
                    setIsLoggedIn(true)
                }
                else {
                    // Alert.alert("No User", "There is  no user")
                    setNoUser(true)
                }
            })
        }


    }
    const check = () => {
        if ("Kamal" == username && "123456" == password) {
            console.log("user Entered the App...")
            setIsLoggedIn(true)
        }
        setIsLoggedIn(true)
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#3C6255' }}>
            <View style={styles.container}>
                <Text style={{ textAlign: 'center', color: '#F5F5F5', letterSpacing: 3, marginBottom: 40, paddingRight: 30, fontSize: 35 }}>LOGIN</Text>
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
                <View style={styles.headerWrapper}>
                    <TextInput
                        style={styles.header}
                        value={password}
                        placeholder="P A S S W O R D"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                    {fillPassword ?
                        <Text style={{ color: 'red', left: 0, letterSpacing: 2,marginBottom:0 }}>enter the password</Text>
                        : null
                    }
                </View>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText} onPress={() => checker()}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={() => navigation.navigate('SignUp')} style={styles.signupButton}>SIGN UP</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity>
                    <Text onPress={() => check()} style={styles.signupButton}>Check</Text>
                </TouchableOpacity> */}
                <View>
                    {/* <Text: 'white'>Username Invalid</Text> */}
                </View>

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