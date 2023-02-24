import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import * as RNFS from 'react-native-fs';

export function Slot_Channel({ navigation, route }) {
    const [data, setData] = useState('');
    const { msg1, msg2, msg3 } = route.params;
    // let arr = new Array();
    RNFS.readFileAssets('hello.txt')
        .then(result => {
            //    console.log(result);
            const words = result.split(',');
            console.log(words.length);
            if (msg1 == 'Slot1' && msg2 == 'channel_1') {
                setData(words[0]);
                console.log(words[0]);
            }
            else if (msg1 == 'Slot1' && msg2 == 'channel_2') {
                console.log(words[1]);
                setData(words[1]);
            }
            else if (msg1 == 'Slot1' && msg2 == 'channel_3') {
                console.log(words[2]);
                setData(words[2]);
            }
            else if (msg1 == 'Slot1' && msg2 == 'channel_4') {
                console.log(words[3]);
                setData(words[3]);
            }
            else if (msg1 == 'Slot2' && msg2 == 'channel_1') {
                console.log(words[4]);
                setData(words[4]);
            }
            else if (msg1 == 'Slot2' && msg2 == 'channel_2') {
                console.log(words[5]);
                setData(words[5]);
            }
            else if (msg1 == 'Slot2' && msg2 == 'channel_3') {
                console.log(words[6]);
                setData(words[6]);
            }
            else if (msg1 == 'Slot2' && msg2 == 'channel_4') {
                console.log(words[7]);
                setData(words[7]);
            }
            else if (msg1 == 'Slot3' && msg2 == 'channel_1') {
                console.log(words[8]);
                setData(words[8]);
            }
            else if (msg1 == 'Slot3' && msg2 == 'channel_2') {
                console.log(words[9]);
                setData(words[9]);
            }
            else if (msg1 == 'Slot3' && msg2 == 'channel_3') {
                console.log(words[10]);
                setData(words[10]);
            }
            else if (msg1 == 'Slot3' && msg2 == 'channel_4') {
                console.log(words[11]);
                setData(words[11]);
            }
            else if (msg1 == 'Slot4' && msg2 == 'channel_1') {
                console.log(words[12]);
                setData(words[12]);
            }
            else if (msg1 == 'Slot4' && msg2 == 'channel_2') {
                console.log(words[13]);
                setData(words[13]);
            }
            else if (msg1 == 'Slot4' && msg2 == 'channel_3') {
                console.log(words[14]);
                setData(words[14]);
            }
            else if (msg1 == 'Slot4' && msg2 == 'channel_4') {
                console.log(words[15]);
                setData(words[15]);
            }
        })
        .catch(err => {
            console.log(err);
        });


    const Marking = () => {
        const [value, setValue] = useState()
        const [array, setArray] = useState([10, 2, 3, 4, 5, 6])
        const semi = data;
        // let text = "0x9100:0x04:100.0:1000:100:100:1.35:100:25:0.0:200:50:5.68:300:75:0.0:500:50:";
        const myArray = data.split(":");
        let temp = 1;
        let offset = 1;
        let gate = 1;
        let values = new Array();
        let no_subPulse = false;
        myArray.map((n, index) => {
            if (index === 0) {
                // console.log('Slot_1 Ch_1', n)
                values.push([msg3, n])
            }
            else if (index === 1) {
                // values.push('  Max_num_of_subpulse: ' + n)
                values.push(['Max_num_of_subpulse', n])
                if (n === '0x00') {
                    no_subPulse = true;
                }
            }
            else if (index === 2) {
                //     values.push('  max_freq: ' + n)
                values.push(['max_freq', n])

            }
            else if (index === 3) {
                values.push(['Max_dur', n])
            }
            else if (index === 4) {
                values.push(['Max_duty', n]);
                temp = 2

            }
            else if (index === 5) {
                values.push(['Max_offset', n])
                temp = 3
            }
            else if (offset === offset && gate < 4 && no_subPulse !== true) {
                console.log('subPulse_' + n)
                // values.push(['subPulse_' + offset + ' freq ' , n])
                if (gate === 1) {
                    console.log('SubPulse_' + offset + '_freq' + n)
                    values.push(['SubPulse_' + offset + '_freq', n])
                }
                else if (gate === 2) {
                    console.log('SubPulse_' + offset + '_dur' + n)
                    values.push(['SubPulse_' + offset + '_dur', n])
                }

                else if (gate === 3) {
                    console.log('SubPulse_' + offset + '_duty' + n)
                    values.push(['SubPulse_' + offset + '_duty', n])
                }

                //  offset==2;
                gate = gate + 1;
            }
            if (gate === 4) {
                gate = 1
                offset = offset + 1
            }

        })
        return (
            <View style={{ flex: 1, backgroundColor: '#0A2647' }}>
                <ScrollView>
                    {values.map((object) => {
                        return (
                            <View style={styles.container} >
                                <View style={styles.subContainer} >
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={[styles.textStyle, { flex: 1.5, paddingLeft: 40, }]} >{object[0]}</Text>
                                        <Text style={[styles.textStyle, { margin: 0, padding: 0 }]} >{object[1]}</Text>
                                    </View>
                                </View>
                            </View>
                        )

                    })}
                </ScrollView>
                {/* <Text style={{color:'white'}}>fh{values}</Text> */}
            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#0A2647', alignItems: 'center' }}>
            <Marking />
            <Text style={{ width: 400, height: 40, backgroundColor: '#00ADB5', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold', fontSize: 20, color: 'white' }} onPress={() => navigation.navigate(msg1)} >Goback</Text>

        </View>
    );
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
        margin: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: "#0A2647",
        backgroundColor: '#0A2647'
    },
    subContainer: {
        width: 350,
        height: 50,
        borderWidth: 1,
        borderColor: "black",
        margin: 2,
        backgroundColor: '#BADAE9',
        color: 'white',
    },
    textStyle: {
        fontSize: 15,
        color: '#0A2647',
        flex: 1,
        // color: 'white',
        // paddingTop: 11,
        justifyContent: 'center',
        fontWeight: 'bold'
    },
})
