/**
 * @copyright Sarwar Hoshen
 */

import React,{useState,useEffect,useRef} from 'react';

import {
    View,Text,FlatList
} from 'react-native';

import {connect} from 'react-redux'
import * as actions from '../../rdx/actions'
import {PlaceholderLoader} from '../_common/loader'
import MovieCard from '../_views/movieCard'

/**
 */
function WatchList( props )
{
    const [isLoading,setLoading] = useState(false)

    /**
     */
    useEffect(()=>{

    },[])
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

    // console.log("props.__movie.watchList",props.__movie.watchList)
    /**
     */
    return (
        <View style={{flex:1}}>

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
                    data={props.__movie.watchList}
                    keyExtractor={(item) => item.id}
                    renderItem={RenderItem}
                    extraData={props.__movie.watchList}
                    numColumns={2}
                />
            </View>


        </View>
    )
}   // WatchList
// export default WatchList
/**
 */
const mapStateToProps = (state) => {
    return state;
}; //
/**
 */
export default connect(mapStateToProps, actions)(WatchList);


