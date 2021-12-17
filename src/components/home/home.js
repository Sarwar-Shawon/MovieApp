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
import Genre from './genre'

/**
 */
function Home( props )
{
    const [isLoading,setLoading] = useState(true)
    const [genreList,setGenreList] = useState([])
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
        try {

            const genreList = await props.RdxGenreList()
            console.log("genreList",genreList)
            setGenreList(genreList.genres || [] )
            setLoading(false)
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

           <Genre item={item}
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
                // ItemSeparatorComponent={()=><View style={{height:1.5,backgroundColor: '#ddd',width:'100%'}}/>}
            />

        </View>
    )
}   // AppDrawer

/**
 */
const mapStateToProps = (state) => {
    return state;
}; //
/**
 */
export default connect(mapStateToProps, actions)(Home);


