/**
 * @copyright Sarwar Hoshen
 */

import React,{useState,useEffect,useRef} from 'react';

import {
    View, Text, FlatList, Image, StyleSheet, TouchableOpacity
} from 'react-native';

import ui from '../../_cfg/ui'
import MovieCard from '../_views/movieCard'
import {PlaceholderLoader} from "../_common/loader"
import FA5Icon from "react-native-vector-icons/FontAwesome5";
import {useDispatch, useSelector} from "react-redux";
import {RdxMovieListByGenre} from "../../rdx/actions";

/**
 */
function GenreList(props )
{
    const dispatch = useDispatch()
    const ts = useSelector(state => state.__movie.ts)
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
        try
        {
            const resp = await dispatch(RdxMovieListByGenre({id:props.item.id}))
            console.log("movieList",resp)
            setMovieList(resp )
            setLoading(false)
        }
        catch (err)
        {
            setLoading(false)
            return {err}
        }
    }
    /**
     */
    const ListItem = ({ item }) => {
        console.log('ListItem')
        return (
            <MovieCard item={item}/>
        );
    };
    /**
     */
    return (
        <View style={styles.container}>
            <View style={{flex:1,flexDirection: 'row', justifyContent:'space-between'}}>

                <TouchableOpacity stlye={{flex:1, backgroundColor: 'red'}}
                                  onPress={() => {}}
                >
                    <Text style={styles.sectionHeader}>{props.item.name}</Text>
                </TouchableOpacity>

                <TouchableOpacity stlye={{flex:1}}
                                  onPress={() => props.navigation.navigate('Genre',{
                                          hdrText: props.item.name ,
                                          item:props.item
                                      })}
                >
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.sectionHeader,{fontSize:14,color: ui.color.primary_pest}]}>{"Show Top 10"}</Text>
                        <FA5Icon name="caret-right"
                                 style={{marginTop:5, right: 5}}
                                 size={26}
                                 color={ui.color.lightBackground}/>

                    </View>

                </TouchableOpacity>
            </View>

            <View style={{flex:1}}>
                {
                    isLoading &&
                    <PlaceholderLoader style={{margin: 20, padding: 20}}/>
                }
                <FlatList
                    horizontal
                    keyExtractor={(item) => item.id}
                    data={movieList}
                    renderItem={({ item }) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                    extraData={movieList}
                    initialNumToRender={5}

                />

            </View>

        </View>
    )
}   // GenreList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: ui.color.primary,
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
        color: ui.text.light,
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


