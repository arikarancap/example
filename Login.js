import { useState, useEffect } from 'react';
import { Button, View, SafeAreaView, Text, Image, StyleSheet, TextInput, Alert, ScrollView, Pressable } from 'react-native';
import { CustomButton } from './CustomButtons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useLogin } from './LoginProvider';

export function SignIn({ navigation }) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const { setIsLoggedIn } = useLogin();

    // useEffect(() => {
    //     getData();
    // }, []);
    // const getData = async () => {
    //     console.log('its working...'); 
    //     try {
    //         AsyncStorage.getItem('UserData')
    //             .then(value => {
    //                 if (value != null) {
    //                     navigation.navigate('LoginShow');
    //                 }
    //             })
    //     }
    //     catch (error) {
    //     }
    // }

    const Authentification = () => {
        // try {
        //     AsyncStorage.getItem('UserData')
        //         .then(value => {
        //             if (value != null) {
        //                 let user = JSON.parse(value);
        //                 // setName(user.Name);
        //                 // setPassword(user.Password);
        //                 user.map((item, index) => {
        //                     console.log(item.name);
        //                     console.log(item.password)
        //                 })
        //             }
        //         })
        //     navigation.navigate('LoginShow')

        // }
        // catch (error) {
        //     console.log(error);
        // }
        setIsLoggedIn(true)
        // navigation.navigate('Home')

    }
    return (
        <View style={styles.body} >
            {/* <Image
                style={styles.logo}
                source={require('./assets/images/download.png')}
            /> */}
            <View style={styles.signInContainer} >
                <Text style={styles.text}>Login</Text>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter Your Name'
                        onChangeText={(value) => setName(value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Enter Your Password'
                        keyboardType="SecureTextEntry"
                        secureTextEntry={true}
                        onChangeText={(value) => setPassword(value)}
                    />
                    <CustomButton
                        onPressFunction={Authentification}
                        title='Login'
                        color='#282A3A'
                    />
                    <Pressable
                        activeOpacity={0.1}
                        underlayColor="#DDDDDD"
                        // hitSlop={{ top: 5, bottom: 5, right: 5, left: 5 }}
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text style={{ color: 'black', marginTop: 15, fontSize: 14 }}>New User Sign Up Now?</Text></Pressable>
                </View>

            </View>
        </View >
    )

}

export function SignUp({ navigation }) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    // useEffect(() => {
    //     getData();
    // }, []);
    // const getData = async () => {
    //     console.log('its working...');
    //     try {
    //         AsyncStorage.getItem('UserData')
    //             .then(value => {
    //                 if (value != null) {
    //                     navigation.navigate('LoginShow');
    //                 }
    //             })
    //     }
    //     catch (error) {
    //     }
    // }
    const setData = async () => {
        console.log('its working...');
        if (name.length == 0 || password.length == 0) {
            Alert.alert('Warning !', 'Please Write  Your Name');
        } else {
            try {
                var user = {
                    Name: name,
                    Password: password,
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                navigation.navigate('SignIn');
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <View style={styles.body} >
            {/* <Image
                style={styles.logo}
                source={require('./assets/images/download.png')}
            /> */}
            <View style={styles.signInContainer} >
                <Text style={styles.text}>Sign Up</Text>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter Your Name'
                        onChangeText={(value) => setName(value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Enter Your Password'
                        keyboardType="SecureTextEntry"
                        secureTextEntry={true}
                        onChangeText={(value) => setPassword(value)}
                    />
                    <CustomButton
                        onPressFunction={setData}
                        title='Sign Up'
                        color='#282A3A'
                    />
                    <Pressable
                        activeOpacity={0.1}
                        underlayColor="#DDDDDD"
                        // hitSlop={{ top: 5, bottom: 5, right: 5, left: 5 }}
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={{ color: 'black', marginTop: 15, fontSize: 14 }}>Press and Login the Account </Text></Pressable>
                </View>

            </View>
        </View >
    )

}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2B3A55',
    },
    logo: {
        width: 100,
        height: 100,
        margin: 20,
        borderRadius: 50,
    },
    text: {
        fontSize: 25,
        color: '#0A2647',
        margin: 20,
        // marginBottom: 10,
        fontWeight: 'bold',
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20,
        // marginTop: 50,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#ABABAB',
        color: 'black'
    },
    signInContainer: {
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 100,
        height: 450,
        backgroundColor: 'white',
        // alignItems: 'center',
        borderRadius: 5,
    },
    container: {
        alignItems: 'center',

    }
});