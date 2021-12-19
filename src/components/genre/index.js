/**
 * @copyright Sarwar Hoshen
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Home from './home'
import PageWrapper from "../_common/pagewrapper";

/**
 */
function ScreenGenre( props )
{
    console.log("props111", props)
    const {params} = props.route

    console.log("params111",params)
    /**
     */
    return (
        <PageWrapper hdrText={props.hdrText}
                     navigation={ props.navigation }
                     active={"genre"}
                     showHdr={ true }
                     showFtr={ true }

        >
            <Home {...props}/>
        </PageWrapper>
    )
}   // ScreenGenre

/**
 */
const Stack = createStackNavigator();

/**
 */
const StackGenre = () =>
{
    return (
        <Stack.Navigator initialRouteName="Genre" headerMode="none">
            <Stack.Screen name='Genre'
                          component={ScreenGenre}
            />
        </Stack.Navigator>
    )
}

/**
 */
export default StackGenre


