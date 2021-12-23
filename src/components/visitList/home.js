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
function VisitList( props )
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
                           padding: 10,
                           justifyContent: 'center',
                           alignItems: 'center'
                       }}
                       fromVisit={true}
                       dt={ConvertDate(item)}
                       navigation={props.navigation}
            />
        )
    }

    const ConvertDate = (item) =>{

        const dt = new Date(item.dt_view)
        let date = dt.getDate();
        let month = dt.getMonth() + 1;
        let year = dt.getFullYear();
        let hours = dt.getHours();
        let min = dt.getMinutes();

        return [ [date,month,year].join('-') , [hours,min].join(':')].join(' ')
    }

    // console.log("props.__movie.VisitList",props.__movie.visitHistory)
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
                    data={props.__movie.visitHistory}
                    keyExtractor={(item) => item.id}
                    renderItem={RenderItem}
                    extraData={props.__movie.visitHistory}
                    numColumns={2}
                />
            </View>


        </View>
    )
}   // VisitList
/**
 */
const mapStateToProps = (state) => {
    return state;
}; //
/**
 */
export default connect(mapStateToProps, actions)(VisitList);


