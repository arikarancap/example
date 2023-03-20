import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SignUp } from './DetailsScreen';
import { SignIn } from './Login';
import { LoginShow } from './showData';
import { useLogin } from './LoginProvider';
import { MainDrawerScreen } from './MainDrawer';
const Stack = createStackNavigator();

const StackNavigator = () => {
    const forFade = ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    });
    return (
        <NavigationContainer >
            <Stack.Navigator
            >
                <Stack.Screen
                    component={SignIn}
                    name='SignIn'
                    options={{ headerShown: false }}

                />
                <Stack.Screen component={SignUp} name='SignUp'
                    options={{
                        title: 'Goback Login',
                    }}

                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export const MainNavigator = () => {
    const { isLoggedIn, setIsLoggedIn } = useLogin()
    return isLoggedIn ? <MainDrawerScreen /> : <StackNavigator />
}