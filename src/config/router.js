/**
 * @copyright Sarwar Hoshen
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import StackHome from '../components/home'

/**
 */
const Stack = createStackNavigator();

/**
 */
const StackApp = ( props ) =>
{
    return (
        <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name='Home' component={StackHome}/>
        </Stack.Navigator>
    )
}

export default function AppNavigator()
{
    return (
        <NavigationContainer>
            <StackApp />
        </NavigationContainer>
    )
}
