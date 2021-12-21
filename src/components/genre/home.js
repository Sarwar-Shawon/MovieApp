/**
 * @copyright Sarwar Hoshen
 */

import React,{useState,useEffect,useRef} from 'react';

import {
    View,Text,FlatList
} from 'react-native';

import {connect} from 'react-redux'
import * as actions from '../../rdx/actions'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import {PlaceholderLoader} from '../_common/loader'
import MovieCard from '../_views/movieCard'
import SortModal from '../_views/sortModal'

/**
 */
function GenreHome( props )
{
    const [isLoading,setLoading] = useState(true)
    const [movieList,setMovieList] = useState([])
    const {params} = props.route
    /**
     */
    useEffect(()=>{

        LoadTopMovies({id: params.item.id})
            .catch()

    },[])
    /**
     */
    const LoadTopMovies = async (p) =>
    {
        try {
            setLoading(true)
            const resp = await props.RdxMovieListSort(p)
            console.log("genre/home: LoadTopMovies: topMovieList: resp: ",resp)
            setMovieList(resp)
            setLoading(false)
        }
        catch (err) {
            console.warn("genre/home: LoadTopMovies: topMovieList: err: ",err)
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
                           padding: 10
                       }}
            />
        )
    }
    /**
     */
    const OnSortChange = async (sortQuery) =>
    {
        try {

            LoadTopMovies({sort_by: `&sort_by=${sortQuery}&with_genres=${params.item.id}`,id: params.item.id })
                .catch()
        }
        catch (err) {
            return {err}
        }
    }
    /**
     */
    return (
        <View style={{flex:1}}>

            <View style={{marginVertical:10}}>
                <SortModal title={'Asd'}
                           OnSortChange={OnSortChange}
                />
            </View>
            {
                isLoading &&
                <PlaceholderLoader style={{margin: 20, padding: 20}}/>
            }
            <View style={{flex:1}}>
                <FlatList
                    contentContainerStyle={{
                        justifyContent: 'center',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}
                    data={movieList}
                    keyExtractor={(item) => item.id}
                    renderItem={RenderItem}
                    // numColumns={2}
                />
            </View>


        </View>
    )
}   // Home

/**
 */
const mapStateToProps = (state) => {
    return state;
}; //
/**
 */
export default connect(mapStateToProps, actions)(GenreHome);


