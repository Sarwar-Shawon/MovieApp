/**
 * @copyright Sarwar Hoshen
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Home from './home'
import GenreMovie from './genreMovie'
import MovieDetails from './movieDetails'
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
            <Home navigation={ props.navigation } {...props}/>

        </PageWrapper>
    )
}   // ScreenHome
/**
 */
function ScreenGenreMovie( props )
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
            <GenreMovie navigation={ props.navigation } {...props}/>

        </PageWrapper>
    )
}   // ScreenGenreMovie
/**
 */
function ScreenMovieDetails( props )
{
    const {params} = props.route

    console.log("params",params)

    /**
     */
    return (
        <PageWrapper hdrText={params.item ? params.item.title : ''}
                     navigation={ props.navigation }
                     active={"home"}
                     showHdr={ true }
                     showBack={ true }
                     style={{
                         fontSize: 20
                     }}

        >
            <MovieDetails navigation={ props.navigation } {...props}/>

        </PageWrapper>
    )
}   // ScreenMovieDetails

/**
 */
const Stack = createStackNavigator();

/**
 */
const StackHome = () =>
{
    return (
        <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name='Home'
                          component={ScreenHome}

            />
            <Stack.Screen name='Genre'
                          component={ScreenGenreMovie}
            />
            <Stack.Screen name='MovieDetails'
                          component={ScreenMovieDetails}
            />
        </Stack.Navigator>
    )
}

/**
 */
export default StackHome


