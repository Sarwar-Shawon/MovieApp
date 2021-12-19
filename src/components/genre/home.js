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


/**
 */
function Home( props )
{
    const [isLoading,setLoading] = useState(true)
    const [movieList,setMovieList] = useState([])

    console.log("props222", props)
    const {params} = props.route

    console.log("params222",params)
    /**
     */
    useEffect(()=>{

        LoadTopMovies()
            .catch()

    },[])
    /**
     */
    const LoadTopMovies = async () =>
    {
        try {

            // const genreList = await props.RdxGenreList()
            // console.log("genreList",genreList)
            // setGenreList(genreList.genres || [] )
            // setLoading(false)
        }
        catch (err) {
            setLoading(false)
            return {err}
        }
    }
    /**
     */
    const RenderItem = ({item}) =>
    {
        return (

            <MovieCard item={item}/>
        )
    }
    /**
     */
    return (
        <View style={{flex:1}}>
            <Text>Genre Page</Text>
            {/*{
                isLoading &&
                <PlaceholderLoader style={{margin: 20, padding: 20}}/>
            }
            <FlatList
                contentContainerStyle={{alignSelf: 'flex-start'}}
                data={movieList}
                keyExtractor={(item) => item.id}
                renderItem={RenderItem}
                numColumns={2}
                // ItemSeparatorComponent={()=><View style={{height:1.5,backgroundColor: '#ddd',width:'100%'}}/>}
            />*/}

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
export default connect(mapStateToProps, actions)(Home);


