/**
 * @copyright Sarwar Hoshen
 */
import React from 'react';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import FA5Icon from "react-native-vector-icons/FontAwesome5"
import StackHome from '../components/home'
import StackWatchList from '../components/watchList'
import ui from "../_cfg/ui";
import {View} from "react-native";
/**
 */
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const StackApp = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 80,
                    backgroundColor: ui.color.primary
                },
            }}
        >
            <Tab.Screen name="AppHome"
                        component={StackHome}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ color, size }) => (
                                <FA5Icon name="home" size={24} color={'#87ceeb'}/>

                            ),
                        }}
            />
            <Tab.Screen name="AppWatchList"
                        component={StackWatchList}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ color, size }) => (
                                <FA5Icon name="heart" size={24} color={'#87ceeb'}/>

                            ),
                        }}
            />
        </Tab.Navigator>
    );
};
/**
 */
const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#333333',
    },
    dark: false
};
/**
 */
export default function AppNavigator()
{
    return (
        <NavigationContainer theme={MyTheme} heade>
            <StackApp />
        </NavigationContainer>
    )
}
