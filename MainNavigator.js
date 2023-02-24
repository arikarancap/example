import React, { useState, useContext } from 'react';
import { View,Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { SignIn, SignUp } from './Login';
import { LoginShow } from './showData';
import { useLogin } from './LoginProvider';
import { MainDrawerScreen } from './MainDrawer';
const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen
                 component={SignIn} 
                 name='SignIn' 
                  options={{
               header: () => <Text style={{fontSize: 30,textAlign:'center',height: 50,textAlignVertical: 'center',fontWeight: 'bold',color: '#2B3A55'}} >Welcome</Text>
               }} />
                <Stack.Screen component={SignUp} name='SignUp' />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export const MainNavigator = () => {
    const { isLoggedIn, setIsLoggedIn } = useLogin()
    return isLoggedIn ? <MainDrawerScreen /> : <StackNavigator />
}