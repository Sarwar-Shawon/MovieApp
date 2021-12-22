/**
 * @copyright Sarwar Hoshen
 */

import React,{useState,useEffect,useRef} from 'react';

import {
    View,Text,FlatList
} from 'react-native';

import { useDispatch} from 'react-redux'
import {PlaceholderLoader} from '../_common/loader'
import MovieCard from '../_views/movieCard'
import SortModal from '../_views/sortModal'
import {RdxMovieListSort} from "../../rdx/actions";

/**
 */
function GenreMovie( props )
{
    const [isLoading,setLoading] = useState(true)
    const [movieList,setMovieList] = useState([])
    const {params} = props.route
    const dispatch = useDispatch()
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
            const resp = await dispatch(RdxMovieListSort(p))
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
                        justifyContent: 'space-between',
                        // flexDirection: 'row',
                        // flexWrap: 'wrap',

                    }}
                    data={movieList}
                    keyExtractor={(item) => item.id}
                    renderItem={RenderItem}
                    extraData={movieList}
                    numColumns={2}
                />
            </View>


        </View>
    )
}   // GenreHome
export default GenreMovie
/**
 */
// const mapStateToProps = (state) => {
//     return state;
// }; //
// /**
//  */
// export default connect(mapStateToProps, actions)(GenreHome);


