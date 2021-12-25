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
import StackVisitList from '../components/visitList'
import StackSearch from '../components/search'
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
                            tabBarIcon: ({ focused }) => (
                                <View>
                                    <FA5Icon name="home" size={24} color={focused? ui.color.primary_pest: ui.text.light}/>
                                </View>

                            ),
                        }}
            />
            <Tab.Screen name="AppWatchList"
                        component={StackWatchList}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ focused }) => (
                                <View>
                                    <FA5Icon name="heart" size={24} color={focused? ui.color.primary_pest: ui.text.light}/>
                                </View>
                            ),
                        }}
            />
            <Tab.Screen name="AppRecentlyVisit"
                        component={StackVisitList}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ focused }) => (
                                <View>
                                    <FA5Icon name="history" size={24} color={focused? ui.color.primary_pest: ui.text.light}/>
                                </View>
                            ),
                        }}
            />
            <Tab.Screen name="AppSearchMovie"
                        component={StackSearch}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ focused }) => (
                                <View>
                                    <FA5Icon name="search" size={24} color={focused? ui.color.primary_pest: ui.text.light}/>
                                </View>
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
