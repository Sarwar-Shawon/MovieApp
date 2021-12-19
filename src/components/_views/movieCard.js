/**
 * @copyright Sarwar Hoshen
 */

import React,{useState,useEffect,useRef} from 'react';

import {
    View,Text,Image,StyleSheet
} from 'react-native';

import api from '../../_cfg/api'
import ui from '../../_cfg/ui'

/**
 */
function MovieCard( props )
{
    return (
        <View style={styles.item}>
            <Image
                source={{
                    uri: props.item.poster_path ? [api.imgPath,props.item.poster_path].join('') : '',
                }}
                style={styles.itemPhoto}
                resizeMode="cover"
            />
            <Text style={styles.itemText}
                  numberOfLines={2}
                  adjustsFontSizeToFit
            >
                {props.item.title}
            </Text>

        </View>
    )
}   // MovieCard

export default MovieCard;

const styles = StyleSheet.create({
    item: {
        marginTop: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,

        elevation: 5,

    },
    itemPhoto: {
        width: 140,
        height: 180,
        borderRadius: 5,
        marginRight: 20
    },
    itemText: {
        color: ui.text.light,
        marginTop: 5,
        width: 120,
        textAlign:'center'

    },
});

