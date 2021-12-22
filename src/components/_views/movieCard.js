/**
 * @copyright Sarwar Hoshen
 */

import React,{useState,useEffect,useRef} from 'react';

import {
    View, Text, Image, StyleSheet, TouchableOpacity
} from 'react-native';

import api from '../../_cfg/api'
import ui from '../../_cfg/ui'
import FA5Icon from "react-native-vector-icons/FontAwesome5"
import {useDispatch, useSelector} from "react-redux";
import {RdxAddToWatchList, RdxRemoveFromWatchList} from "../../rdx/actions";

/**
 */
function MovieCard( props )
{
    const watchListObj = useSelector(state => state.__movie.watchListObj)
    const [watchStatus,setWatchStatus] = useState(watchListObj[props.item.id] ? true : false)
    const [changeState,setChangeState] = useState(null)
    const dispatch = useDispatch()

    const WatchListUpd = () =>
    {
        setWatchStatus(!watchStatus)
        setChangeState(true)
    }

    useEffect(()=>{
        if(changeState)
        {
            if(watchStatus)
                dispatch(RdxAddToWatchList(props.item)).catch()
            else
                dispatch(RdxRemoveFromWatchList(props.item)).catch()
        }
    },[changeState])

    return (
        <View style={[styles.item, props.style]}>
            <View>
                <Image
                    source={{
                        uri: props.item.poster_path ? [api.imgPath,props.item.poster_path].join('') : '',
                    }}
                    style={styles.itemPhoto}
                    resizeMode="cover"
                />
                <View style={[styles.rating,styles.shadow]}>
                    <Text style={{color: '#50C77B'}}>{props.item.vote_average}</Text>
                </View>
                <View>
                    <TouchableOpacity style={[styles.fav,styles.shadow,{backgroundColor: watchStatus ? '#50C77B' : ui.color.primary_light }]}
                                      onPress={()=> WatchListUpd()  }
                    >
                        <Text>
                            <FA5Icon name={watchStatus? 'check':'plus'} size={20} color={!watchStatus ?'#50C77B': ui.text.dark}/>
                        </Text>
                    </TouchableOpacity>
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

