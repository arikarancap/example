import React, { Component, useEffect } from 'react'
import {
    Platform,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
    Image,
} from 'react-native';
import Share from 'react-native-share';
import * as RNFS from 'react-native-fs';
import DeviceInfo from 'react-native-device-info';
import Toast from '@remobile/react-native-toast'
import BluetoothSerial from 'react-native-bluetooth-serial'
import RNFetchBlob from 'react-native-fetch-blob';
import Bluetooth from 'react-native-bluetooth';

import { Buffer } from 'buffer'
global.Buffer = Buffer
const iconv = require('iconv-lite')
// import Filepicker from './FilePicker';
import DocumentPicker from 'react-native-document-picker';


const Button = ({ title, onPress, style, textStyle }) =>
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={[styles.buttonText, textStyle]}>{title.toUpperCase()}</Text>
    </TouchableOpacity>


const DeviceList = ({ devices, connectedId, showConnectedIcon, onDevicePress }) =>
    <ScrollView style={styles.container}>
        <View style={styles.listContainer}>
            {devices.map((device, i) => {
                return (
                    <TouchableHighlight
                        underlayColor='#DDDDDD'
                        key={`${device.id}_${i}`}
                        style={styles.listItem} onPress={() => onDevicePress(device)}>
                        <View style={{ flexDirection: 'row' }}>
                            {showConnectedIcon
                                ? (
                                    <View style={{ width: 48, height: 48, opacity: 0.4 }}>
                                        {connectedId === device.id
                                            ? (
                                                <Image style={{ resizeMode: 'contain', width: 24, height: 24, flex: 1 }} source={require('./images/ic_done_black_24dp.png')} />
                                            ) : null}
                                    </View>
                                ) : null}
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>{device.name}</Text>
                                <Text>{`<${device.id}>`}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    // C:\Users\arikaran\Documents\React native\Remote\android\app\src\main\assets\hello.txt
                )
            })}
        </View>
    </ScrollView>

export class PairDeviceScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEnabled: false,
            discovering: false,
            devices: [],
            unpairedDevices: [],
            connected: false,
            section: 0,
            multipleFile: [],
            sendBluetooth: "Hello World...",
            uriPath: '',
            files: [],
            FileData: '',
        }
    }

    UNSAFE_componentWillMount() {
        Promise.all([
            BluetoothSerial.isEnabled(),
            BluetoothSerial.list()
        ])
            .then((values) => {
                const [isEnabled, devices] = values
                this.setState({ isEnabled, devices })
            })

        BluetoothSerial.on('bluetoothEnabled', () => Toast.showShortBottom('Bluetooth enabled'))
        BluetoothSerial.on('bluetoothDisabled', () => Toast.showShortBottom('Bluetooth disabled'))
        BluetoothSerial.on('error', (err) => console.log(`Error: ${err.message}`))
        BluetoothSerial.on('connectionLost', () => {
            if (this.state.devices) {
                Toast.showShortBottom(`Connection to device ${this.state.devices.name} has been lost`)
            }
            this.setState({ connected: false })
        })
    }

    /**
     * [android]
     * request enable of bluetooth from user
     */
    requestEnable() {
        BluetoothSerial.requestEnable()
            .then((res) => this.setState({ isEnabled: true }))
            .catch((err) => Toast.showShortBottom(err.message))
    }

    /**
     * [android]
     * enable bluetooth on device
     */
    enable() {
        BluetoothSerial.enable()
            .then((res) => this.setState({ isEnabled: true }))
            .catch((err) => Toast.showShortBottom(err.message))
    }

    /**
     * [android]
     * disable bluetooth on device
     */
    disable() {
        BluetoothSerial.disable()
            .then((res) => this.setState({ isEnabled: false }))
            .catch((err) => Toast.showShortBottom(err.message))
    }

    /**
     * [android]
     * toggle bluetooth
     */
    toggleBluetooth(value) {
        if (value === true) {
            this.enable()
        } else {
            this.disable()
        }
    }



    disconnect() {
        BluetoothSerial.disconnect()
            .then(() => this.setState({ connected: false }))
            .catch((err) => Toast.showShortBottom(err.message))
    }

    /**
     * Toggle connection when we have active device
     * @param  {Boolean} value
     */
    toggleConnect(value) {
        if (value === true && this.state.devices) {
            this.connect(this.state.devices)
        } else {
            this.disconnect()
        }
    }




    info = () => {
        const uniqueId = DeviceInfo.getPhoneNumber();
        console.log(uniqueId)
    }
    selectMultipleFile = async () => {
        //Opening Document Picker for selection of multiple file
        try {
            const results = await DocumentPicker.pickMultiple({
                type: [DocumentPicker.types.plainText],
                allowMultiSelection: true,
                //There can me more options as well find above
            });
            console.log(results)
            for (const res of results) {
                //Printing the log realted to the file
                console.log('res : ' + JSON.stringify(res));
                console.log('URI : ' + res.uri);
                console.log('Type : ' + res.type);
                console.log('File Name : ' + res.name);
                console.log('File Sizes : ' + res.size);
                this.setState({ uriPath: res.uri })
            }

            this.setState({ multipleFile: results })
        } catch (err) {
            //Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) {
                //If user canceled the document selection
                alert('Canceled from multiple doc picker');
            } else {
                //For Unknown Error
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    };
    filePath = RNFS.DocumentDirectoryPath + "/example.txt"; //absolute path of our file
    content = "Show up, show up, show up, and after a while the muse shows up, too."

    makeFile = async (filePath, content) => {
        try {
            //create a file at filePath. Write the content data to it
            await RNFS.writeFile(filePath, content, "utf8");
            console.log("written to file");
        } catch (error) { //if the function throws an error, log it out.
            console.log(error);
        }
    };
    readFile = async (path) => {
        const response = await RNFS.readFile(path);
        this.setState({ FileData: response }); //set the value of response to the fileData Hook.
        console.log(response);
    };

    getFileContent = async (path) => {
        const reader = await RNFS.readDir(path);
        setFiles(reader);
    };

    sharing = async () => {
        console.log('words');
        RNFS.readFileAssets('hello.txt').then(result => {
            const word = result.split(',');
            const words = word.toString()
            console.log(typeof (words))
            this.setState({ sendBluetooth: words })

        })


        shareOptions = {
            // message: "0x1000:0x97:0xA7:0xB7:0x45:0x2000:0xABCD:0x9100:0x04:100.0:100:0x64:100:1.35:100:25:0.0:200:50:5.68:300:75:0.0:500:50:0x9200:0x08:100.0:100:0x64:100:1.35:100:25:0.0:200:50:5.68:300:75:0.0:500:50:1.35:100:25:0.0:200:50:5.68:300:75:0.0:500:50:0x9300:0x0C:100.0:100:0x64:100:1.35:100:25:0.0:200:50:5.68:300:75:0.0:500:50:1.35:100:25:0.0:200:50:5.68:300:75:0.0:500:50:1.35:100:25:0.0:200:50:5.68:300:75:0.0:500:50",
            // title: `Share ${fileName}`,
            // url: `file://${JSON.stringify(this.state.sendBluetooth)}`,
            // type: 'text/txt',
            message: this.state.sendBluetooth,
            type: 'text/plain',
        }
        try {
            const ShareResponse = await Share.open(shareOptions);
        }
        catch (error) {
            console.log('Error is : ' + error)
        }
    }
    file = () => {
        // this.makeFile(this.filePath, this.content);
        this.readFile(this.filePath);
        // getFileContent(RNFS.DocumentDirectoryPath);
    }

    render() {
        const activeTabStyle = { borderBottomWidth: 6, borderColor: '#009688' }
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.08, }}>
                    <View style={[styles.topBar]}>
                        <Text style={styles.heading}>Bluetooth</Text>
                        {Platform.OS === 'android'
                            ? (
                                <View style={styles.enableInfoWrapper}>
                                    <Text style={{ fontSize: 12, color: '#FFFFFF' }}>
                                        {this.state.isEnabled ? 'disable' : 'enable'}
                                    </Text>
                                    <Switch
                                        onValueChange={this.toggleBluetooth.bind(this)}
                                        value={this.state.isEnabled} />
                                </View>
                            ) : null}
                    </View>
                </View>

                {/* {Platform.OS === 'android'
                    ? (
                        <View style={[styles.topBar, { justifyContent: 'center', paddingHorizontal: 0 }]}>                       
                            <TouchableOpacity style={[styles.tab, this.state.section === 2 && activeTabStyle]} onPress={() => this.setState({ section: 2 })}>
                                <Text style={{ fontSize: 14, color: '#FFFFFF' }}>SEND_DATA</Text>
                            </TouchableOpacity>
                        </View>
                    ) : null} */}

                <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 250 }} >
                        {/* <Filepicker /> */}
                        {/*To show single file attribute*/}
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.buttonStyle}
                            onPress={this.selectMultipleFile}>
                            {/*Multiple files selection button*/}
                            <Text style={{ marginRight: 10, fontSize: 19 }}>
                                Click here to pick multiple files
                            </Text>
                            <Image
                                source={{
                                    uri: 'https://img.icons8.com/offices/40/000000/attach.png',
                                }}
                                style={styles.imageIconStyle}
                            />
                        </TouchableOpacity>
                        <Button
                            textStyle={{ color: '#FFFFFF' }}
                            style={styles.buttonRaised}
                            title='Send Data'
                            onPress={() => this.file()} />
                        <ScrollView>
                            {/*Showing the data of selected Multiple files*/}
                            {/* {this.state.multipleFile.map((item, key) => (
                                    <View key={key}>
                                        <Text style={styles.textStyle}>
                                            File Name: {item.name ? item.name : ''}
                                            {'\n'5
                                            Type: {item.type ? item.type : ''}
                                            {'\n'}
                                            File Size: {item.size ? item.size : ''}
                                            {'\n'}
                                            URI: {item.uri ? item.uri : ''}
                                            {'\n'}
                                        </Text>
                                        <Text style={{ color: 'black' }} >{this.state.uriPath}</Text>
                                    </View>
                                ))} */}
                            {/* <Button title='file' onpress={this.file} /> */}
                            {/* <Button
                                    textStyle={{ color: '#FFFFFF' }}
                                    style={styles.buttonRaised}
                                    title='MakeFile'
                                    onPress={() => this.file()} /> */}
                            {/* <Text>{this.state.sendBluetooth}</Text> */}
                        </ScrollView>
                    </View>




                </View>

            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        backgroundColor: '#F5FCFF'
    },
    topBar: {
        height: 56,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 6,
        backgroundColor: '#0A2647'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center',
        color: '#FFFFFF'
    },
    enableInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tab: {
        alignItems: 'center',
        flex: 0.5,
        height: 56,
        justifyContent: 'center',
        borderBottomWidth: 6,
        borderColor: 'transparent'
    },
    connectionInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25
    },
    connectionInfo: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 18,
        marginVertical: 10,
        color: '#238923'
    },
    listContainer: {
        borderColor: '#ccc',
        borderTopWidth: 0.5
    },
    listItem: {
        flex: 1,
        height: 48,
        paddingHorizontal: 16,
        borderColor: '#ccc',
        borderBottomWidth: 0.5,
        justifyContent: 'center'
    },
    fixedFooter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        // color: '#0A2647'
    },
    button: {
        height: 36,
        margin: 5,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#0A2647',
        fontWeight: 'bold',
        fontSize: 14
    },
    buttonRaised: {
        width: 200,
        height: 40,
        marginTop: 50,
        backgroundColor: '#0A2647',
        borderRadius: 40,
        elevation: 2
    },
    // filePicker styles
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
    },
    textStyle: {
        backgroundColor: '#fff',
        fontSize: 15,
        marginTop: 16,
        color: 'black',
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 10,
        width: 350
    },
    imageIconStyle: {
        height: 20,
        width: 20,
        resizeMode: 'stretch',
    },
})


