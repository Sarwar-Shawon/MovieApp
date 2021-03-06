/**
 * @copyright Sarwar Hoshen
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import WatchList from './home'
import PageWrapper from "../_common/pagewrapper";

/**
 */
function ScreenWatchList( props )
{
    /**
     */
    return (
        <PageWrapper hdrText={"Watch List"}
                     navigation={ props.navigation }
                     showHdr={ true }

        >
            <WatchList navigation={ props.navigation } {...props}/>

        </PageWrapper>
    )
}   // ScreenWatchList

/**
 */
const Stack = createStackNavigator();

/**
 */
const StackWatchList = () =>
{
    return (
        <Stack.Navigator initialRouteName="WatchList"
                         screenOptions={{
                             headerShown: false
                         }}
        >
            <Stack.Screen name='WatchList'
                          component={ScreenWatchList}

            />
        </Stack.Navigator>
    )
}

/**
 */
export default StackWatchList


