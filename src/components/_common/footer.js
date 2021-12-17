/**
 *  @copyright Sarwar Hoshen
 */

import React from 'react'

import {
    View, Text,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    StatusBar, SafeAreaView,
    StyleSheet, Image,
} from 'react-native'

import FA5Icon from "react-native-vector-icons/dist/FontAwesome5"
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'


/**
 */
const Footer = () =>
{
    /**
	 */
    return (
        <View style={style.container}>

        </View>
    )
}   // fuc Footer

export default Footer;

const style = StyleSheet.create( {
    container: {
        flexDirection: 'row',
        height: 50,
        borderTopWidth:0.5,
        borderTopColor:"#b7b7b7",
        backgroundColor:"#fff",
        elevation:2
    },
    item: {
        flex: 1,
        alignItems: 'center', justifyContent: 'center',
    }
} )







