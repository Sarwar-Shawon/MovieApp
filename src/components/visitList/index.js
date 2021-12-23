/**
 * @copyright Sarwar Hoshen
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import VisitList from './home'
import PageWrapper from "../_common/pagewrapper";

/**
 */
function ScreenVisitList( props )
{
    /**
     */
    return (
        <PageWrapper hdrText={"Recently Visited Movies"}
                     navigation={ props.navigation }
                     active={"home"}
                     showHdr={ true }
                     showFtr={ true }

        >
            <VisitList navigation={ props.navigation } {...props}/>

        </PageWrapper>
    )
}   // ScreenWatchList

/**
 */
const Stack = createStackNavigator();

/**
 */
const StackVisitList = () =>
{
    return (
        <Stack.Navigator initialRouteName="VisitList"
                         screenOptions={{
                             headerShown: false
                         }}
        >
            <Stack.Screen name='VisitList'
                          component={ScreenVisitList}
            />
        </Stack.Navigator>
    )
}

/**
 */
export default StackVisitList


