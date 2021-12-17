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

    useEffect(() => {
    }, []);

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


