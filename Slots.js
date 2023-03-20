import React, { useState } from "react";
import { color } from "react-native-reanimated";
import {
    Switch,
    View,
    Text,
    TouchableOpacity,
    SectionList,
    Pressable,
    FlatList,
    TextInput,
    StyleSheet,
    ImageBackground,
    Image,
    PermissionsAndroid,
    ToastAndroid,
    Button
} from "react-native";
import { Slot1_Channel1 } from "./Channel";
import BluetoothStateManager from "react-native-bluetooth-state-manager";
import BluetoothSerial from 'react-native-bluetooth-serial';
import { PairDeviceScreen } from './Connection';
export function Slot1({ navigation }) {
    return (
        <View style={styles.body}>
            <Text
                style={{ fontWeight: "bold", color: "white", fontSize: 30, margin: 20, marginTop: -100 }}
            >
                Select Channel
            </Text>
            <TouchableOpacity
                style={styles.button1}
                onPress={() =>
                    navigation.navigate("Extraction", {
                        msg1: "Slot1",
                        msg2: "channel_1",
                        msg3: "Slot_1_Channel_1",
                    })
                }
            >
                <Text style={styles.buttonText}>Channel 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button2}
                onPress={() =>
                    navigation.navigate("Slot_Channel", {
                        msg1: "Slot1",
                        msg2: "channel_2",
                        msg3: "Slot_1_Channel_2",
                    })
                }
            >
                <Text style={styles.buttonText}>Channel 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button3}
                onPress={() =>
                    navigation.navigate("Slot_Channel", {
                        msg1: "Slot1",
                        msg2: "channel_3",
                        msg3: "Slot_1_Channel_3",
                    })
                }
            >
                <Text style={styles.buttonText}>Channel 3</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button4}
                onPress={() =>
                    navigation.navigate("Slot_Channel", {
                        msg1: "Slot1",
                        msg2: "channel_4",
                        msg3: "Slot_1_Channel_4",
                    })
                }
            >
                <Text style={styles.buttonText}>Channel 4</Text>
            </TouchableOpacity>
        </View>
    );
}

export function Slot2({ navigation }) {
    return (
        <View style={styles.body}>
            <Text
                style={{ fontWeight: "bold", color: "white", fontSize: 30, margin: 20, marginTop: -100 }}
            >
                Select Channel
            </Text>
            <TouchableOpacity
                style={styles.button1}
                onPress={() =>
                    navigation.navigate("Slot_Channel", {
                        msg1: "Slot2",
                        msg2: "channel_1",
                        msg3: "Slot_2_Channel_1",
                    })
                }
            >
                <Text style={styles.buttonText}>Channel 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button2}
                onPress={() =>
                    navigation.navigate("Slot_Channel", {
                        msg1: "Slot2",
                        msg2: "channel_2",
                        msg3: "Slot_2_Channel_2",
                    })
                }
            >
                <Text style={styles.buttonText}>Channel 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button3}
                onPress={() =>
                    navigation.navigate("Slot_Channel", {
                        msg1: "Slot2",
                        msg2: "channel_3",
                        msg3: "Slot_2_Channel_3",
                    })
                }
            >
                <Text style={styles.buttonText}>Channel 3</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button4}
                onPress={() =>
                    navigation.navigate("Slot_Channel", {
                        msg1: "Slot2",
                        msg2: "channel_4",
                        msg3: "Slot_2_Channel_4",
                    })
                }
            >
                <Text style={styles.buttonText}>Channel 4</Text>
            </TouchableOpacity>
        </View>
    );
}
export function Slot3({ navigation }) {
    return (
        <View style={styles.body}>
            <Text
                style={{ fontWeight: "bold", color: "white", fontSize: 30, margin: 20, marginTop: -100 }}
            >
                Select Channel
            </Text>
            <TouchableOpacity
                style={styles.button1}
                onPress={() =>
                    navigation.navigate("Slot_Channel", {
                        msg1: "Slot3",
                        msg2: "channel_1",
                        msg3: "Slot_3_Channel_1",
                    })
                }
            >
                <Text style={styles.buttonText}>Channel 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button2}
                onPress={() =>
                    navigation.navigate("Slot_Channel", {
                        msg1: "Slot3",
                        msg2: "channel_2",
                        msg3: "Slot_3_Channel_2",
                    })
                }
            >
                <Text style={styles.buttonText}>Channel 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button3}
                onPress={() =>
                    navigation.navigate("Slot_Channel", {
                        msg1: "Slot3",
                        msg2: "channel_3",
                        msg3: "Slot_3_Channel_3",
                    })
                }
            >
                <Text style={styles.buttonText}>Channel 3</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button4}
                onPress={() =>
                    navigation.navigate("Slot_Channel", {
                        msg1: "Slot3",
                        msg2: "channel_4",
                        msg3: "Slot_3_Channel_4",
                    })
                }
            >
                <Text style={styles.buttonText}>Channel 4</Text>
            </TouchableOpacity>
        </View>
    );
}

export function Slot4({ navigation }) {
    return (
        <View style={styles.body}>
            <Text
                style={{ fontWeight: "bold", color: "white", fontSize: 30, margin: 20, marginTop: -100 }}
            >
                Select Channel
            </Text>
            <TouchableOpacity
                style={styles.button1}
                onPress={() =>
                    navigation.navigate("Slot_Channel", {
                        msg1: "Slot4",
                        msg2: "channel_1",
                        msg3: "Slot_4_Channel_1",
                    })
                }
            >
                <Text style={styles.buttonText}>Channel 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button2}
                onPress={() =>
                    navigation.navigate("Slot_Channel", {
                        msg1: "Slot4",
                        msg2: "channel_2",
                        msg3: "Slot_4_Channel_1",
                    })
                }
            >
                <Text style={styles.buttonText}>Channel 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button3}
                onPress={() =>
                    navigation.navigate("Slot_Channel", {
                        msg1: "Slot4",
                        msg2: "channel_3",
                        msg3: "Slot_4_Channel_3",
                    })
                }
            >
                <Text style={styles.buttonText}>Channel 3</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button4}
                onPress={() =>
                    navigation.navigate("Slot_Channel", {
                        msg1: "Slot4",
                        msg2: "channel_4",
                        msg3: "Slot_4_Channel_4",
                    })
                }
            >
                <Text style={styles.buttonText}>Channel 4</Text>
            </TouchableOpacity>
        </View>
    );
}

export function Home({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [devices, setDevices] = useState([]);
    const [selectedDevice, setSelectedDevice] = useState(null);
    const enable = () => {
        return BluetoothStateManager.enable().then((result) => {
            // do something...
            console.log("enable");
        });
    };
    const disable = () => {
        return BluetoothStateManager.disable().then((result) => {
            // do something...
            console.log("disable");
        });
    };
    const requestPermissions = async (cb) => {
        if (Platform.OS === "android") {
            //      const apiLevel = await DeviceInfo.getApiLevel();

            if (20 < 31) {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: "Location Permission",
                        message: "Bluetooth Low Energy requires Location",
                        buttonNeutral: "Ask Later",
                        buttonNegative: "Cancel",
                        buttonPositive: "OK",
                    }
                );
                cb(granted === PermissionsAndroid.RESULTS.GRANTED);
            } else {
                const result = await requestMultiple([
                    PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
                    PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
                    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
                ]);

                const isGranted =
                    result["android.permission.BLUETOOTH"] ===
                    PermissionsAndroid.RESULTS.GRANTED &&
                    result["android.permission.BLUETOOTH_SCAN"] ===
                    PermissionsAndroid.RESULTS.GRANTED &&
                    result["android.permission.ACCESS_FINE_LOCATION"] ===
                    PermissionsAndroid.RESULTS.GRANTED;

                cb(isGranted);
            }
        } else {
            cb(true);
        }
    };

    // const openModal = async () => {
    //     requestPermissions((isGranted) => {
    //         if (isGranted) {
    //             // scans();
    //             //         setIsModalVisible(true);
    //         }
    //         {
    //             scan ? alert("the Android Permission is Granted..." + isGranted) : null;
    //         }
    //     });
    // };
    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
        if (isEnabled === false) {
            enable();
            ToastAndroid.showWithGravityAndOffset(
                'Bluetooh is Enabled'
                , ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                -100, 50)
        }
        if (isEnabled === true) {
            disable();
            ToastAndroid.showWithGravityAndOffset(
                'Bluetooh is Disabled'
                , ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                -100, -500)
        }
    };


    return (
        <View style={{
            flex: 1, justifyContent: 'center', backgroundColor: '#3C6255',
            alignItems: 'center',
        }} >
            <Text style={styles.text}>Welcome Bluetooth App</Text>
            <View style={{ flex: .4, justifyContent: 'center' }} >
                <TouchableOpacity
                    onPress={toggleSwitch}
                    activeOpacity={0.6}
                >
                    {isEnabled ? (
                        <Image
                            source={require("./assets/images/images1on.png")}
                            style={styles.blutoothImage}
                        />
                    ) : (
                        <Image
                            source={require("./assets/images/images1off.png")}
                            style={styles.blutoothImage}
                        />
                    )}
                </TouchableOpacity>
            </View>

            {/* <PairDeviceScreen /> */}

        </View>
    );
}


const styles = StyleSheet.create({
    body: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#0A2647",
    },
    button1: {
        backgroundColor: "white",
        padding: 12,
        borderRadius: 4,
        alignItems: "center",
        margin: 10,
    },
    button2: {
        backgroundColor: "white",
        padding: 12,
        borderRadius: 4,
        alignItems: "center",
        margin: 10,
    },
    button3: {
        backgroundColor: "white",
        padding: 12,
        borderRadius: 4,
        alignItems: "center",
        margin: 10,
    },
    button4: {
        backgroundColor: "white",
        padding: 12,
        borderRadius: 4,
        alignItems: "center",
        margin: 10,
    },
    buttonText: {
        color: "#0A2647",
        fontWeight: "bold",
        fontSize: 25,
    },
    MainLayOutStyle: {
        backgroundColor: "#0A2647",
        flex: 1,
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 150,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    pulseContainer: {
        borderWidth: 1,
        borderColor: "black",
        display: "flex",
        width: 300,
        height: 50,
    },
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#0A2647",
        backgroundColor: "#0A2647",
    },
    subContainer: {
        width: 350,
        height: 50,
        borderWidth: 1,
        borderColor: "black",
        margin: 2,
        backgroundColor: "#BADAE9",
        color: "white",
    },
    textStyle: {
        fontSize: 15,
        color: "#0A2647",
        flex: 1,
        // color: 'white',
        paddingTop: 11,
        justifyContent: "center",
        fontWeight: "bold",
    },
    button: {
        borderWidth: 1,
        backgroundColor: "#4FA095",
        width: 180,
        height: 50,
        // alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: 15,
    },
    blutoothImage: {
        width: 50,
        height: 50,
        borderRadius: 30,

    },
    leftContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    clickButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
});

// channel = (title,title1) => {

//     console.log(title,title1);
//     RNFS.readFileAssets('hello.txt')
//     .then(result =>{
//         const words = result.split(',');
//         for (var i=0;i<words.length;i++){
//         const w = words[i].split(':');
//         const a=w
//         // console.log(a);
//         if(title1=='channel_1'){
//             channels='0x04'
//             b=a
//             // console.log(b);
//             const result = b.indexOf(channels);
//             console.log(result);
//             if (result !== -1) {
//                 setData(words[i]);
//                 console.log(words[i]);
//             }
//         }
//         else if(title1=='channel_2'){
//             channels='0x08'
//             b=a
//             const result = b.indexOf(channels);
//             if (result !== -1) {
//                 setData(words[i]);
//             }
//         }
//         else if(title1=='channel_3'){
//             channels='0x0C'
//             b=a
//             const result = b.indexOf(channels);
//             if (result !== -1) {
//                 setData(words[i]);
//             }
//         }
//         else if(title1=='channel_4'){
//             channels='0x00'
//             b=a
//             const result = b.indexOf(channels);
//             if (result !== -1) {
//                 setData(words[i]);
//             }
//         }
//         }
//     })
//     .catch(err =>{
//         console.log(err);
//     });
//     }
