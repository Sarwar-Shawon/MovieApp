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
        <PageWrapper hdrText={"Movie Watch List"}
                     navigation={ props.navigation }
                     active={"home"}
                     showHdr={ true }
                     showFtr={ true }

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
        <Stack.Navigator initialRouteName="WatchList" headerMode="none">
            <Stack.Screen name='WatchList'
                          component={ScreenWatchList}

            />
        </Stack.Navigator>
    )
}

/**
 */
export default StackWatchList


