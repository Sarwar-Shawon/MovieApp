/**
 * @copyright Sarwar Hoshen
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Home from './home'
import PageWrapper from "../_common/pagewrapper";

/**
 */
function ScreenHome( props )
{
    /**
     */
    return (
        <PageWrapper hdrText={"Movie App"}
                     navigation={ props.navigation }
                     active={"home"}
                     showHdr={ true }
                     showFtr={ true }

        >
            <Home navigation={ props.navigation } />

        </PageWrapper>
    )
}   // Screen_Home

/**
 */
const Stack = createStackNavigator();

/**
 */
const StackHome = ( props ) =>
{
    return (
        <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name='Home'
                          component={ScreenHome}

            />
        </Stack.Navigator>
    )
}

/**
 */
export default StackHome


