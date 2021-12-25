/**
 * @copyright Sarwar Hoshen
 */

import React,{useState,useEffect,useRef} from 'react';

import {
    View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ui from '../../_cfg/ui'

/**
 */
function PlaceHolderText( props )
{
    return (
        <View style={[styles.boxView,{justifyContent: 'center', alignItems: 'center'}]}>

            <MaterialCommunityIcons name={props.emoji}  size={100} color={ui.color.primary_pest}/>

            <Text style={{marginTop: 10,fontSize: 20, fontWeight: "bold",color: ui.text.light}}>
                {props.title}
            </Text>

        </View>
    )
}   // SearchHome
/**
 */
export default PlaceHolderText

const styles = StyleSheet.create({

    boxView: {
        flex:1,
        borderRadius:8,
        padding:15,
        marginHorizontal:20,
        marginBottom:5,
        backgroundColor: ui.color.primary,
        // borderWidth: 0.5,
        // borderColor: ui.text.dark,
        shadowOffset:{  width: 1,  height: 1,  },
        shadowColor: '#ddd',
        shadowOpacity: 0.5
    }
});

