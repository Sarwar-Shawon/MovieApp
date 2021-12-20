/**
 * @copyright Sarwar Hoshen
 */

import React,{useState,useEffect,useRef} from 'react';

import {
    View, Text, Image, StyleSheet, TouchableOpacity
} from 'react-native';

import api from '../../_cfg/api'
import ui from '../../_cfg/ui'
import MCIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

/**
 */
function MovieCard( props )
{
    return (
        <View style={[props.style, styles.item]}>
            <View>
                <Image
                    source={{
                        uri: props.item.poster_path ? [api.imgPath,props.item.poster_path].join('') : '',
                    }}
                    style={styles.itemPhoto}
                    resizeMode="cover"
                />
                <View style={[styles.rating,styles.shadow]}>
                    <Text style={{color: ui.text.light}}>{props.item.vote_average}</Text>
                </View>
                <View style={[styles.fav,styles.shadow]}>
                    <Text style={{color: ui.text.light}}>
                        <MCIcon name={'plus'} size={20} color={ui.text.light}/>
                    </Text>
                </View>
            </View>

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
        marginRight: 20

    },
    itemPhoto: {
        width: 140,
        height: 200,
        borderRadius: 5,
        resizeMode: 'contain',
        // marginRight: 20
    },
    itemText: {
        color: ui.text.light,
        marginTop: 5,
        width: 120,
        textAlign:'center',
        fontWeight: 'bold'

    },
    rating:{
        position:'absolute',
        margin: 10,
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: "#1d1d1d",
        justifyContent: 'center',
        alignItems: 'center',

    },
    fav:{
        position:'absolute',
        right: -5,
        bottom: -10,
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: ui.color.primary_light,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,

        elevation: 5
    }
});

