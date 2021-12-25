/**
 * @copyright Sarwar Hoshen
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import SearchHome from './search'
import PageWrapper from "../_common/pagewrapper";

/**
 */
function ScreenSearch( props )
{
    /**
     */
    return (
        <PageWrapper hdrText={"Search"}
                     navigation={ props.navigation }
                     showHdr={ true }

        >
            <SearchHome navigation={ props.navigation } {...props}/>

        </PageWrapper>
    )
}   // ScreenSearch

/**
 */
const Stack = createStackNavigator();

/**
 */
const StackSearch = () =>
{
    return (
        <Stack.Navigator initialRouteName="Search"
                         screenOptions={{
                             headerShown: false
                         }}
        >
            <Stack.Screen name='Search'
                          component={ScreenSearch}

            />
        </Stack.Navigator>
    )
}

/**
 */
export default StackSearch


