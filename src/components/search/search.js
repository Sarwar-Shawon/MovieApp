/**
 * @copyright Sarwar Hoshen
 */

import React,{useState,useEffect,useRef} from 'react';

import {
    View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet
} from 'react-native';
import {useDispatch} from 'react-redux'
import {PlaceholderLoader} from '../_common/loader'
import MovieCard from '../_views/movieCard'
import {RdxSearchMovie} from "../../rdx/actions";
import ui from '../../_cfg/ui'
import {ShowAlert} from "../_views/ShowAlert";
import PlaceHolderText from '../_views/placeHolder'
/**
 */
function SearchHome( props )
{
    const dispatch = useDispatch()
    const [isLoading,setLoading] = useState(false)
    const [searchText,setSearchText] = useState(false)
    const [txtBoxActive,setTxtBoxActive] = useState(false)
    const [searchList,setSearchList] = useState([])

    /**
     */
    useEffect(()=>{

    },[])
    /**
     */
    const LoadSearchList = async () =>
    {
        try
        {
            if(searchText)
            {
                setLoading(true)
                setTxtBoxActive(false)
                const sData = await dispatch(RdxSearchMovie({val: searchText}))
                // console.log("sData",sData)
                setSearchList(sData)
                setLoading(false)
            }
            else
            {
                ShowAlert({
                    title: 'Error', msg: `Please enter something to search.`
                })
            }

        }
        catch (err)
        {
            setLoading(false)
            return {err}
        }
    }
    /**
     */
    const RenderItem = ({item}) =>
    {
        return (

            <MovieCard item={item}
                       style={{
                           flex: 1,
                           margin: 10,
                           padding: 10,
                           justifyContent: 'center',
                           alignItems: 'center'
                       }}
                       navigation={props.navigation}
            />
        )
    }
    /**
     */
    return (
        <View style={{flex:1}}>

            <View style={{flexDirection: 'row', margin: 20}}>
                <View style={{flex: 3 }}>
                    <TextInput style={[styles.searchBtn,{paddingLeft: 5}]}
                               placeholderTextColor={"#ddd"}
                               autoCorrect={false}
                               placeholder='Search Movie'
                               value={searchText}
                               onChangeText={(text) => {
                                   if(!text.length){

                                       setSearchList([])
                                       setTxtBoxActive(true)
                                   }
                                   setSearchText(text )
                               }}
                               onBlur={()=>setTxtBoxActive(false) }
                               onFocus={()=>setTxtBoxActive(true) }

                    />
                </View>
                <View style={{flex: 1, marginLeft: 5}}>
                    <TouchableOpacity
                                      onPress={LoadSearchList}
                                      style={[styles.searchBtn,{borderColor: ui.color.primary_pest}]}
                    >
                        <Text style={{color:ui.text.light}}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {

                isLoading ?
                <PlaceholderLoader style={{justifyContent: 'center',alignItems: 'center',margin: 20, padding: 20}}/>
                :
                searchText && searchList.length ?
                <View style={{flex: 1}}>
                    <FlatList
                        contentContainerStyle={{
                            justifyContent: 'space-between',
                            // flexDirection: 'row',
                            // flexWrap: 'wrap',

                        }}
                        data={searchList}
                        keyExtractor={(item) => item.id}
                        renderItem={RenderItem}
                        numColumns={2}
                    />
                </View>
                :
                !txtBoxActive && !searchList.length ?
                    <View style={{flex:1}}>
                        <PlaceHolderText title={'Oops! No Movies Found.'}
                                         emoji={'emoticon-sad-outline'}
                        />
                    </View>
                :
                !searchText ?
                    <View style={{flex: 1}}>
                        <PlaceHolderText title={'Please! Enter Movie Title.'}
                                         emoji={'emoticon-outline'}
                        />
                    </View> : null

            }


        </View>
    )
}   // SearchHome
/**
 */
export default SearchHome

const styles = StyleSheet.create({
    searchBtn:{
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,

        elevation: 5,
        borderWidth: 1,
        borderColor: ui.text.light,
        height: 40,
        color: ui.text.light
    }
});

