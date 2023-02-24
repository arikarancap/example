import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import 'react-native-gesture-handler';
// import CustomDrawer from "./CustomDrawer";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Slot1, Slot2, Slot3, Slot4, Home } from "./Slots";
import { Slot_Channel } from './Channel';
import { PreConfiguration } from './preConfiguration';
import { PairDeviceScreen } from './Connection';
import { SignIn, SignUp } from './Login';
import { LoginShow } from './showData';
import { useLogin } from './LoginProvider';

import { loadPartialConfigAsync } from "@babel/core";
// import { SlotHandler,SlotHandlerTwo, SlotHandlerThree, SlotHandlerFour } from './Channel';
const Drawer = createDrawerNavigator();


const CustomDrawerContent = ({ navigation }) => {
    const { setIsLoggedIn } = useLogin();

    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex: 1 }}
        >
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 0,
                }}
            >
                {/* #####################close####################################### */}
                <View
                    style={{
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onPress={() => navigation.closeDrawer()}
                    >
                        <Image
                            source={require('./assets/images/exitimage.png')}
                            style={styles.image}
                        >

                        </Image>
                    </TouchableOpacity>

                </View>
                {/* ########################profile################################*/}
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
                {/* ####################Drawer Items################################### */}
                <View>
                    <DrawerItem
                        label="Home"
                        style={styles.drawerItem}
                        labelStyle={styles.labelStyle}
                        onPress={() => {
                            navigation.navigate("Home");
                        }}
                    />
                    <DrawerItem
                        label="PreConfiguration"
                        style={styles.drawerItem}
                        labelStyle={styles.labelStyle}
                        onPress={() => {
                            navigation.navigate("PreConfiguration");
                        }}
                    />
                    {/* <DrawerItem
                       label="PairDeviceScreen"
                       style={styles.drawerItem}
                       labelStyle={styles.labelStyle}
                       onPress={() => {
                           navigation.navigate("PairDeviceScreen");
                       }}
                   /> */}

                    {/* <DrawerItem
                        label="SignIn"
                        style={styles.drawerItem}
                        labelStyle={styles.labelStyle}
                        onPress={() => {
                            navigation.navigate("SignIn");
                        }}
                    /> */}
                    <DrawerItem
                        label="LoginShow"
                        style={styles.drawerItem}
                        labelStyle={styles.labelStyle}
                        onPress={() => {
                            navigation.navigate("LoginShow");
                        }}
                    />

                    <DrawerItem
                        label="Slot 1"
                        style={styles.drawerItem}
                        labelStyle={styles.labelStyle}
                        onPress={() => {
                            navigation.navigate("Slot1");
                        }}
                    />
                    <DrawerItem
                        label="Slot 2"
                        style={styles.drawerItem}
                        labelStyle={styles.labelStyle}
                        onPress={() => {
                            navigation.navigate("Slot2");
                        }}
                    />
                    <DrawerItem
                        label="Slot 3"
                        style={styles.drawerItem}
                        labelStyle={styles.labelStyle}
                        onPress={() => {
                            navigation.navigate("Slot3");
                        }}
                    />
                    <DrawerItem
                        label="Slot 4"
                        style={styles.drawerItem}
                        labelStyle={styles.labelStyle}
                        onPress={() => {
                            navigation.navigate("Slot4");
                        }}
                    />
                    <DrawerItem
                        label="Logout"
                        style={styles.drawerItem}
                        labelStyle={[styles.labelStyle, { marginTop: 5, fontSize: 20 }]}
                        onPress={() => {
                            setIsLoggedIn(false);
                        }}
                    />


                </View>

            </View>
        </DrawerContentScrollView>
    )
}

export function MainDrawerScreen() {
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
                        fontSize: 21, fontWeight: 'bold',
                    }
                }}


            >
                <Drawer.Screen
                    name="LoginShow"
                    component={LoginShow}
                    options={{
                        title: 'LoginShow',
                    }}
                />

                {/* <Drawer.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{
                        title: 'SignIn',
                    }}
                /> */}
                {/* <Drawer.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{
                        title: 'SignUp',
                    }}
                /> */}
                <Drawer.Screen
                    name="Slot1"
                    component={Slot1}
                    options={{
                        title: 'Slot 1',
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
                    name="Slot2"
                    component={Slot2}
                    options={{
                        title: 'Slot 2',
                    }}
                />
                <Drawer.Screen
                    name="Slot3"
                    component={Slot3}
                    options={{
                        title: 'Slot 3',
                    }}
                />
                <Drawer.Screen
                    name="Slot4"
                    component={Slot4}
                    options={{
                        title: 'Slot 4',
                    }}
                />
                <Drawer.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Bluetooth App',
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
                    }}
                />
                {/* <Drawer.Screen
                   name="SlotHandlerTwo"
                   component={SlotHandlerTwo}
                   options={{
                       title: 'Bluetooth App',
                   }}
               /> */}
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

