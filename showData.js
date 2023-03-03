import { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet, TextInput, Alert } from 'react-native';
import { CustomButton } from './CustomButtons';
import AsyncStorage from '@react-native-async-storage/async-storage';
export function LoginShow({ navigation, route }) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        console.log('its working...');
        // const numbers = [9, 36, 64, 144];
        // let squareRoots = numbers.map((number) => {
        //     console.log(number)
        // });
        // console.log(squareRoots)
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        let user = JSON.parse(value);
                        setName(user.Name);
                        setPassword(user.Password);
                        console.log(user.Name)
                        console.log(user.Password)

                        // user.map((item, index) => {
                        //     console.log(item.Name);
                        //     console.log(item.Password)
                        // })
                    }
                })
        }
        catch (error) {
            console.log(error)
        }
    }
    const updateData = async () => {
        console.log('its working...');
        if (name.length === 0) {
            Alert.alert('Warning !', 'Please Write  Your Name');
        } else {
            try {
                var user = {
                    Name: name,
                }
                await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
                Alert.alert('YOur Successfully upDate the Data...');
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    const removeData = async () => {
        console.log('its working...');
        try {
            // await AsyncStorage.clear();
            await AsyncStorage.clear();
            navigation.navigate('SignIn');
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={styles.body}>
            <TextInput
                style={styles.input}
                placeholder='Enter Your Name'
                value={name}
                editable={true}
                onChangeText={(value) => setName(value)}
            />
            <CustomButton
                onPressFunction={updateData}
                title='Update'
                color='orange'
            />
            <CustomButton
                onPressFunction={removeData}
                title='Remove'
                color='red'
            />
            <Text style={{ color: 'black' }} >Name ! {name}</Text>
            <Text style={{ color: 'black' }} >Password ! {password}</Text>

        </View>
    )

}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        // justifyContent:'center',
        backgroundColor: '#F1DBBF',

    },
    logo: {
        width: 100,
        height: 100,
        margin: 20,
    },
    text: {
        fontSize: 30,
        color: '#698269',
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,
        // marginTop: 50,
        margin: 5,
        backgroundColor: '#ffffff',
        color: 'white',
    }
});