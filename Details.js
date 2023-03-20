import React, { useState, useEffect } from "react";
import { Button, View, ImageBackground, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as RNFS from 'react-native-fs';
import Share from 'react-native-share';

// import { repeat } from "react-native-reanimated/lib/types/lib/reanimated2/animation/repeat";
export const Details = ({ navigation, route }) => {
    const { msg1, msg2, msg3 } = route.params;
    const [sendBluetooth, setSendBluetooth] = useState('');
    const objects = {
        Max_num_of_subpulse: '',
        max_freq: '100.0',
        Max_dur: '1000',
        Max_duty: '100',
        Max_offset: '100',
    }
    let values = [];

    const press = () => { }
    console.log('press', msg1, msg2);
    let repeat = msg2.slice(-2) * 3;
    console.log(repeat);
    let temp = 1;
    let offset = 1;
    let gate = 1;
    let arr = [1.35, 100, 25, 0.0, 200, 50, 5.68, 300, 75, 0.0, 500, 50, 1.35, 100, 25, 0.0, 200, 50, 5.68, 300, 75, 0.0, 500, 50, 1.35, 100, 25, 0.0, 200, 50, 5.68, 300, 75, 0.0, 500, 50]
    for (let i = 0; i < repeat; i++) {
        // console.log(i);
        if (gate < 4) {
            if (gate === 1) {
                console.log('SubPulse_' + offset + '_freq', arr[i])
                values.push(['SubPulse_' + offset + '_freq', arr[i]])
            }
            else if (gate === 2) {
                console.log('SubPulse_' + offset + '_dur', arr[i])
                values.push(['SubPulse_' + offset + '_dur', arr[i]])
            }

            else if (gate === 3) {
                console.log('SubPulse_' + offset + '_duty', arr[i])
                values.push(['SubPulse_' + offset + '_duty', arr[i]])
            }
            gate = gate + 1;

        }
        if (gate == 4) {
            gate = 1;
            offset = offset + 1

        }


    }
    const file = () => {
        console.log('words');
        RNFS.readFileAssets('hello.txt').then(result => {
            const word = result.split(',');
            const words = word.toString()
            console.log(typeof (words))
            setSendBluetooth(words)
            // this.setState({ sendBluetooth: words })

        })
    }
    useEffect(() => {
        file()
    }, [])
    
    const sharing = async () => {
        // console.log('words');
        // RNFS.readFileAssets('hello.txt').then(result => {
        //     const word = result.split(',');
        //     const words = word.toString()
        //     console.log(typeof (words))
        //     setSendBluetooth(words)
        //     // this.setState({ sendBluetooth: words })

        // })


        shareOptions = {
            // message: "0x1000:0x97:0xA7:0xB7:0x45:0x2000:0xABCD:0x9100:0x04:100.0:100:0x64:100:1.35:100:25:0.0:200:50:5.68:300:75:0.0:500:50:0x9200:0x08:100.0:100:0x64:100:1.35:100:25:0.0:200:50:5.68:300:75:0.0:500:50:1.35:100:25:0.0:200:50:5.68:300:75:0.0:500:50:0x9300:0x0C:100.0:100:0x64:100:1.35:100:25:0.0:200:50:5.68:300:75:0.0:500:50:1.35:100:25:0.0:200:50:5.68:300:75:0.0:500:50:1.35:100:25:0.0:200:50:5.68:300:75:0.0:500:50",
            // title: `Share ${fileName}`,
            // url: `file://${JSON.stringify(this.state.sendBluetooth)}`,
            // type: 'text/txt',
            message: sendBluetooth,
            type: 'text/plain',
        }
        try {
            const ShareResponse = await Share.open(shareOptions);
        }
        catch (error) {
            console.log('Error is : ' + error)
        }
    }


    return (
        <View style={{ flex: 1, }}>
            <View
                style={{
                    display: 'flex',
                    width: 380, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
                }}>
                <Text style={styles.text1}>
                    <FontAwesome5 name={'arrow-left'} size={20} color={'black'} onPress={() => {
                        navigation.navigate("Extraction");
                    }} />
                </Text>
                <Text style={styles.text2}>Details</Text>
                <Text style={styles.text3}>
                    <FontAwesome5 name={'share-alt'} size={20} color={'black'} onPress={sharing} />
                </Text>
            </View>
            <View style={{ backgroundColor: '#3C6255', alignItems: 'center' }}>
                {/* <Button
                onPress={sharing}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            /> */}


                <ScrollView>

                    <View style={styles.container} >
                        <View style={styles.subContainer} >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.textStyle, { flex: 1.5, paddingLeft: 40, }]} >{'Slot Channel'}</Text>
                                <Text style={[styles.textStyle, { margin: 0, padding: 0 }]} >{msg1}</Text>
                            </View>
                        </View>
                        <View style={styles.subContainer} >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.textStyle, { flex: 1.5, paddingLeft: 40, }]} >{'Max_Num_of_SubPulse'}</Text>
                                <Text style={[styles.textStyle, { margin: 0, padding: 0 }]} >{msg2}</Text>
                            </View>
                        </View>
                        <View style={styles.subContainer} >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.textStyle, { flex: 1.5, paddingLeft: 40, }]} >{'Max_frequency'}</Text>
                                <Text style={[styles.textStyle, { margin: 0, padding: 0 }]} >{'100.0'}</Text>
                            </View>
                        </View>
                        <View style={styles.subContainer} >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.textStyle, { flex: 1.5, paddingLeft: 40, }]} >{'Max_duration'}</Text>
                                <Text style={[styles.textStyle, { margin: 0, padding: 0 }]} >{'100'}</Text>
                            </View>
                        </View>
                        <View style={styles.subContainer} >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.textStyle, { flex: 1.5, paddingLeft: 40, }]} >{'Max_duty'}</Text>
                                <Text style={[styles.textStyle, { margin: 0, padding: 0 }]} >{'100'}</Text>
                            </View>
                        </View>
                    </View>
                    {
                        values.map((value, index) => {
                            return (
                                <View key={index} style={styles.container} >
                                    <View style={styles.subContainer} >
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={[styles.textStyle, { flex: 1.5, paddingLeft: 40, }]} >{value[0]}</Text>
                                            <Text style={[styles.textStyle, { margin: 0, padding: 0 }]} >{value[1]}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                {/* <TouchableOpacity
                onPress={sharing}
                style={{ height: 40, width: 100, backgroundColor: '#841584', justifyContent: 'center', flexDirection: 'row' }}>
                <Text Text style={{ textAlign: 'center', color: 'white', textAlignVertical: 'center', paddingRight: 10 }}>
                    <FontAwesome5 name={'share-alt'} size={18} color={'white'} />
                </Text>
                <Text style={{ textAlign: 'center', color: 'white', textAlignVertical: 'center' }}>

                    Share
                </Text>

            </TouchableOpacity> */}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        // margin: 10,
    },
    container: {
        // flex: 1,
        // backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: "#0A2647",
        // backgroundColor: 'white'
    },
    subContainer: {
        width: 390,
        height: 50,
        // borderWidth: 1,
        // borderColor: "black",
        // margin: 2,
        // backgroundColor: '#BADAE9',
        backgroundColor: '#3C6255',

        color: 'white',
    },
    textStyle: {
        fontSize: 15,
        color: 'white',
        flex: 1,
        // color: 'white',
        paddingTop: 11,
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    text1: {
        flex: 1, marginLeft: 15
    },
    text2: {
        flex: 1, fontSize: 20, textAlign: 'center', color: 'black', fontWeight: 'bold', letterSpacing: 5

    },
    text3: {
        flex: 1, marginRight: 10, textAlign: 'right'
    }
})