/**
 * @copyright Sarwar Hoshen
 */

import React,{useState,useEffect,useRef} from 'react';

import {
    View, Text, Image, StyleSheet, TouchableOpacity
} from 'react-native';

import api from '../../_cfg/api'
import ui from '../../_cfg/ui'
import WatchButton from './watchBtn'

/**
 */
function MovieCard( props )
{


    return (
        <View>
            {
                props.fromVisit &&
                <View style={{
                    justifyContent: 'center',
                    marginTop: 10
                }}>
                    <Text
                        numberOfLines={2}
                        style={{
                            color: ui.text.light,
                            textAlign:'center',
                            fontWeight: 'bold'
                        }}
                        adjustsFontSizeToFit
                    >
                        {props.dt}
                    </Text>
                </View>
            }
            <TouchableOpacity style={[styles.item, props.style]}
                              onPress={()=> props.navigation.navigate('MovieDetails',{
                                  item: props.item,
                                  navigateTo: props.navigateTo
                              })}
            >
                <View>
                    <Image
                        source={
                            props.item.poster_path ? {uri: [api.imgPath,props.item.poster_path].join('')} : require('../assets/img/dummyMovie.png')
                        }
                        style={styles.itemPhoto}
                        resizeMode="cover"
                    />
                    <View style={[styles.rating,styles.shadow]}>
                        <Text style={{color: '#50C77B'}}>{props.item.vote_average}</Text>
                    </View>
                    <View>
                        <WatchButton
                            style={[styles.fav,styles.shadow]}
                            item={props.item}
                        />
                    </View>

                    <View style={{
                        justifyContent: 'center'
                    }}>
                        <Text style={styles.itemText}
                              numberOfLines={2}
                              adjustsFontSizeToFit
                        >
                            {props.item.title}
                        </Text>
                    </View>
                </View>


            </TouchableOpacity>
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
        padding: 2,
        margin: 2,
        flex:1
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
        marginTop: 8,
        width: 120,
        textAlign:'center',
        fontWeight: 'bold'
    },
    rating:{
        position:'absolute',
        margin: 2,
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: "#1d1d1d",
        justifyContent: 'center',
        alignItems: 'center',

    },
    fav:{
        position:'absolute',
        left: 105,
        bottom: 10,
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
        elevation: 5,
    }
});

