/**
 * @copyright Sarwar Hoshen
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import GenreHome from './home'
import PageWrapper from "../_common/pagewrapper";

/**
 */
function ScreenGenre( props )
{
    const {params} = props.route
    /**
     */
    return (
        <PageWrapper hdrText={params.hdrText}
                     navigation={ props.navigation }
                     active={"genre"}
                     showHdr={ true }
                     showFtr={ true }

        >
            <GenreHome navigation={ props.navigation } {...props}/>
        </PageWrapper>
    )
}   // ScreenGenre

/**
 */
const Stack = createStackNavigator();
/**
 */
const StackGenre = (props) =>
{
    return (
        <Stack.Navigator initialRouteName="GenreHome" headerMode="none">
            <Stack.Screen name='GenreHome'
                          component={ScreenGenre}
            />
        </Stack.Navigator>
    )
}

/**
 */
export default StackGenre


