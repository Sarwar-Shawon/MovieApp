/**
 *@copyright Sarwar Hoshen
 **/

import React from 'react'

import {
    Alert
} from "react-native"


//
function ShowAlert( obj )
{
    Alert.alert(
        obj.title ? obj.title : 'Error!',
        obj.msg,
        [
            {text: 'OK', onPress: () => obj.OnOK ? obj.OnOK() : null },
        ],
        {cancelable: false},
    )
}   // ErrAlert


export {ShowAlert}
