/**
 * @copyright Sarwar Hoshen
 */

import React,{useState,useEffect,useRef} from 'react';

import {
    View,Text
} from 'react-native';

import {connect} from 'react-redux'
import * as actions from '../../rdx/actions'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'

/**
 */
function Home( props )
{
    /**
     */
    useEffect(()=>{

        LoadMovieGenre()
            .catch()

    },[])
    /**
     */
    const LoadMovieGenre = async () =>
    {
        try {
            const genreList = await props.RdxGenreList()
            console.log("genreList",genreList)

        }
        catch (err) {
            return {err}
        }
    }
    return (
        <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home</Text>
        </View>
    )
}   // AppDrawer

/**
 */
const mapStateToProps = (state) => {
    return state;
}; //
/**
 */
export default connect(mapStateToProps, actions)(Home);


