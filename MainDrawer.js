import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable, useState, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Extraction } from './newScreen';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Slot1, Slot2, Slot3, Slot4, Home } from "./Slots";
import { Slot_Channel } from './Channel';
import { PreConfiguration } from './preConfiguration';
import { PairDeviceScreen } from './Connection';
import { SignIn, SignUp } from './Login';
import { LoginShow } from './showData';
import { useLogin } from './LoginProvider';
import { Details } from './Details';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { loadPartialConfigAsync } from "@babel/core";
const Drawer = createDrawerNavigator();


const CustomDrawerContent = ({ navigation }) => {
    const { setIsLoggedIn, SubMenu, setSubMenu } = useLogin();

    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex: 1 }}
        >
            <View style={{ flex: 0.1, backgroundColor: 'white' }} >
                <TouchableOpacity
                    style={styles.profile}

                >

                    <View style={{
                        marginLeft: 10,

                    }} >
                        <Text style={styles.ProfileHeader}>
                            Bluetooth App</Text>
                        <Text style={styles.ProfileExplanation} >
                            View your Slots</Text>
                    </View>
                    <Image source={require('./assets/images/bluetoothimage.png')}
                        style={styles.blutoothImage}
                    >
                    </Image>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flex: 0.9,
                    paddingHorizontal: 0,
                    // backgroundColor: 'green'
                }}
            >

                <View>
                    <DrawerItem
                        label="Home"
                        style={[styles.drawerItem, { marginTop: 30 }]}
                        icon={({ color, size, focused }) => (
                            <FontAwesome5 name={'house-user'} size={18} color={'black'} />
                        )}
                        labelStyle={styles.labelStyle}
                        onPress={() => {
                            navigation.navigate("Home");
                        }}

                    />
                    <DrawerItem
                        label="PreConfiguration"
                        icon={({ color, size, focused }) => (
                            <FontAwesome5 name={'wrench'} size={18} color={'black'} />
                        )}
                        style={styles.drawerItem}
                        labelStyle={styles.labelStyle}
                        onPress={() => {
                            navigation.navigate("PreConfiguration");
                        }}

                    />
                    <DrawerItem
                        label="Extraction"
                        style={styles.drawerItem}
                        icon={({ color, size, focused }) => (
                            <FontAwesome5 name={'file'} size={18} color={'black'} />
                        )}
                        labelStyle={styles.labelStyle}
                        onPress={() => {
                            navigation.navigate("Extraction");
                        }}
                    />

                    {/* <DrawerItem
                        label="SignIn"
                        style={styles.drawerItem}
                        labelStyle={styles.labelStyle}
                        onPress={() => {
                            navigation.navigate("SignIn");
                        }}
                    /> */}
                    {/* <DrawerItem
                        label="Slot 1"
                        // focused={focus ? true : false}
                        icon={({ color, size, focused }) => (
                            <FontAwesome5 name={'file'} size={18} color={'black'} />
                        )}
                        style={styles.drawerItem}
                        labelStyle={styles.labelStyle}
                        onPress={() => {
                            navigation.navigate("Slot1");
                            // setSubMenu(true)

                        }}

                    /> */}
                    {/* {SubMenu ? (
                        <View>
                            <DrawerItem
                                label="Channel1"
                                icon={({ color, size, focused }) => (
                                    <FontAwesome5 name={'wrench'} size={18} color={'black'} />
                                )}
                                style={[styles.drawerItem, { marginLeft: 70 }]}
                                labelStyle={styles.labelStyle}
                                onPress={() => {
                                    navigation.navigate("LoginShow");
                                }}
                            />
                            <DrawerItem
                                label="Channel1"
                                icon={({ color, size, focused }) => (
                                    <FontAwesome5 name={'wrench'} size={18} color={'black'} />
                                )}
                                style={[styles.drawerItem, { marginLeft: 70 }]}
                                labelStyle={styles.labelStyle}
                                onPress={() => {
                                    navigation.navigate("LoginShow");
                                }}

                            />
                            <DrawerItem
                                label="Channel1"
                                icon={({ color, size, focused }) => (
                                    <FontAwesome5 name={'wrench'} size={18} color={'black'} />
                                )}
                                style={[styles.drawerItem, { marginLeft: 70 }]}
                                labelStyle={styles.labelStyle}
                                onPress={() => {
                                    navigation.navigate("LoginShow");
                                }}

                            />
                        </View>
                    )
                        : null} */}
                    {/* <DrawerItem
                        label="Slot 2"
                        icon={({ color, size, focused }) => (
                            <FontAwesome5 name={'file'} size={18} color={'black'} />
                        )}
                        style={styles.drawerItem}
                        labelStyle={styles.labelStyle}
                        onPress={() => {
                            navigation.navigate("Slot2");
                        }}
                    />
                    <DrawerItem
                        label="Slot 3"
                        icon={({ color, size, focused }) => (
                            <FontAwesome5 name={'file'} size={18} color={'black'} />
                        )}
                        style={styles.drawerItem}
                        labelStyle={styles.labelStyle}
                        onPress={() => {
                            navigation.navigate("Slot3");
                        }}
                    />
                    <DrawerItem
                        label="Slot 4"
                        icon={({ color, size, focused }) => (
                            <FontAwesome5 name={'file'} size={18} color={'black'} />
                        )}
                        style={styles.drawerItem}
                        labelStyle={styles.labelStyle}
                        onPress={() => {
                            navigation.navigate("Slot4");
                        }}
                    /> */}
                </View>


            </View>
            <View style={{
                flex: 0.1,
                // backgroundColor: 'orange', 
            }}>
                {/* <DrawerItem
                    label="Logout"
                    style={styles.drawerItem}
                    icon={({ color, size, focused }) => (
                        <FontAwesome5 name={'arrow-circle-left'} size={18} color={'black'} />
                    )}
                    labelStyle={[styles.labelStyle, { marginTop: 0, fontSize: 20 }]}
                    onPress={() => {
                        setIsLoggedIn(false);
                    }}
                /> */}
            </View>
        </DrawerContentScrollView>
    )
}

export function MainDrawerScreen() {
    const { setIsLoggedIn, SubMenu, setSubMenu } = useLogin();

    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerType="slide"
                overlayColor="transparent"
                initialRouteName="Home"
                drawerStyle={styles.drawer}
                sceneContainerStyle={{ backgroundColor: 'transparent' }}
                drawerContent={props => {
                    return (
                        <CustomDrawerContent
                            navigation={props.navigation}
                        />
                    )
                }}
                style={{ width: 200 }}
                screenOptions={{
                    headerShown: true,
                    swipeEnabled: false,
                    gestureEnabled: false,
                    headerTitleAlign: 'center',

                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerTintColor: '#0A2647',
                    headerTitleStyle: {
                        fontSize: 21,
                        fontWeight: 'bold',
                    }
                    ,
                    drawerStyle: {
                        width: 280,
                    },

                }}


            >
                <Drawer.Screen
                    name="Extraction"
                    component={Extraction}
                    options={{
                        title: 'Extraction',
                        headerShown: false

                    }}
                />
                <Drawer.Screen
                    name="Details"
                    component={Details}
                    options={{
                        title: 'Details',
                        headerShown: false
                    }}
                />

                <Drawer.Screen
                    name="PairDeviceScreen"
                    component={PairDeviceScreen}
                    options={{
                        title: 'PairDeviceScreen',
                    }}
                />
                <Drawer.Screen
                    name="Slot1"
                    component={Slot1}
                    options={{
                        title: 'Slot 1',
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name="Slot2"
                    component={Slot2}
                    options={{
                        title: 'Slot 2',
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name="Slot3"
                    component={Slot3}
                    options={{
                        title: 'Slot 3',
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name="Slot4"
                    component={Slot4}
                    options={{
                        title: 'Slot 4',
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Bluetooth App',
                        // headerTitle: () => <Text style={{ color: 'black' }}>Hello</Text>,
                        headerRight: () =>
                            <View style={{ marginRight: 10 }} >
                                <AntDesign name={'logout'} size={20} color={'black'} onPress={() => { setIsLoggedIn(false); }} />
                            </View>
                        ,
                    }}

                />
                <Drawer.Screen
                    name="PreConfiguration"
                    component={PreConfiguration}
                    options={{
                        title: 'Bluetooth App',
                    }}
                />
                <Drawer.Screen
                    name="Slot_Channel"
                    component={Slot_Channel}
                    options={{
                        title: 'Channel Configuration',
                        headerShown: false
                    }}
                />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange'

    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    },
    image: {
        width: 20,
        height: 20,
        margin: 5,
    },
    profile: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        padding: 10,
        marginBottom: 30,
        borderBottomWidth: 2,
        borderBottomColor: 'black'

    },
    CustomDrawerItemsStyle: {
        flexDirection: 'row',
        height: 40,
        marginBottom: 10,
        alignItems: 'center',
        paddingLeft: 10,
        borderRadius: 10,

    },
    customItemsName: {
        marginLeft: 15,
        color: 'black',
        fontSize: 45,

    },
    drawer: {
        flex: 1,
        width: 100,
        height: 200,
        paddingRight: 20,
        backgroundColor: 'green',
    },
    drawerItem: {
        // backgroundColor: 'skyblue',
        width: 300,
        margin: 0,
    },
    ProfileHeader: {
        color: 'black',
        fontSize: 23,
        marginLeft: 10
    },
    ProfileExplanation: {
        color: 'black',
        fontSize: 13,
        marginLeft: 10
    },
    labelStyle: {
        color: "black",
        fontSize: 15
    },
    blutoothImage: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginLeft: 30,
    }
})

