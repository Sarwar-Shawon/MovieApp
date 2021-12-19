/**
 * @copyright Sarwar Hoshen
 */

import React,{useState,useEffect,useRef} from 'react';

import {
    View, Text, FlatList, Image, StyleSheet, TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux'
import * as actions from '../../rdx/actions'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import api from '../../_cfg/api'
import ui from '../../_cfg/ui'
import MovieCard from '../_views/movieCard'
import {PlaceholderLoader} from "../_common/loader"

/**
 */
function GenreList(props )
{
    const [isLoading,setLoading] = useState(true)
    const [movieList,setMovieList] = useState([])
    /**
     */
    useEffect(()=>{
        LoadMovieList()
            .catch()
    },[])
    /**
     */
    const LoadMovieList = async () =>
    {
        try {

            const resp = await props.RdxMovieListByGenre({id:props.item.id})
            // console.log("movieList",resp)
            setMovieList(resp )
            setLoading(false)
        }
        catch (err) {
            setLoading(false)
            return {err}
        }
    }
    /**
     */
    const ListItem = ({ item }) => {
        return (
            <MovieCard item={item}/>
        );
    };
    /**
     */
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity stlye={{flex:1}}
                                  onPress={() => {}}
                >
                    <Text style={styles.sectionHeader}>{props.item.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity stlye={{flex:1}}
                                  onPress={() => props.navigation.navigate('AppGenre',{hdrText: props.item.name , item:props.item})}
                >
                    <Text style={[styles.sectionHeader,{fontSize:12, marginTop:5}]}>{"Top 10"}</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex:1,marginHorizontal: 10}}>
                {
                    isLoading &&
                    <PlaceholderLoader style={{margin: 20, padding: 20}}/>
                }
                <FlatList
                    horizontal
                    data={movieList}
                    renderItem={({ item }) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                />

            </View>

        </View>
    )
}   // Genre

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ui.color.primary,
    },
    sectionHeader: {
        fontWeight: '800',
        fontSize: 18,
        // marginTop: 20,
        // marginBottom: 5,
        marginHorizontal: 10,
        paddingTop:10,
        paddingBottom:10,
        color: ui.text.light
    },
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
        color: ui.color.primary_light,
        marginTop: 5,
    },
});
// /**
//  */
// const mapStateToProps = (state) => {
//     return state;
// }; //
/**
 */
export default GenreList;


