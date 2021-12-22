/**
 * @copyright Sarwar Hoshen
 */

import React,{useState,useEffect,useRef} from 'react';

import {
    View,Text,FlatList
} from 'react-native';

import {connect, useDispatch, useSelector} from 'react-redux'
import * as actions from '../../rdx/actions'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import {PlaceholderLoader} from '../_common/loader'
import GenreList from './genreList'
import {RdxGenreList} from "../../rdx/actions";

/**
 */
function Home( props )
{
    const dispatch = useDispatch()
    const genreList = useSelector(state => state.__genre.genreList)
    const [isLoading,setLoading] = useState(false)
    /**
     */
    useEffect(()=>{

        LoadMovieGenre()
            .catch()

    },[])


    /**
     */
    const LoadMovieGenre = async () =>
    {
        try
        {
            if(!genreList)
                setLoading(true)
            await dispatch(RdxGenreList())
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
    const RenderItem = ({item}) =>
    {
        return (

           <GenreList item={item}
                      {...props}
           />
        )
    }
    /**
     */
    return (
        <View style={{flex:1}}>
            {
                isLoading &&
                <PlaceholderLoader style={{margin: 20, padding: 20}}/>
            }
            <FlatList
                data={genreList}
                keyExtractor={(item) => item.id}
                renderItem={RenderItem}
                extraData={genreList}
            />

        </View>
    )
}   // Home

/**
 */
export default Home


