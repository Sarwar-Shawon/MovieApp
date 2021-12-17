/**
 * @copyright Sarwar Hoshen
 */

import React,{useState,useEffect,useRef} from 'react';

import {
    View,Text,FlatList,Image,StyleSheet
} from 'react-native';

import {connect} from 'react-redux'
import * as actions from '../../rdx/actions'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import api from '../../_cfg/api'

import ui from '../../_cfg/ui'
const data =  [
    {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1/200',
    },
    {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/10/200',
    },

    {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1002/200',
    },
    {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1006/200',
    },
    {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1008/200',
    },
]
/**
 */
function Genre( props )
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
            console.log("movieList",resp)
            setMovieList(resp )
            setLoading(false)
        }
        catch (err) {
            setLoading(false)
            return {err}
        }
    }
    const ListItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Image
                    source={{
                        uri: item.poster_path ? [api.imgPath,item.poster_path].join('') : '',
                    }}
                    style={styles.itemPhoto}
                    resizeMode="cover"
                />
                <Text style={styles.itemText}>{item.title}</Text>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <Text style={styles.sectionHeader}>{props.item.name}</Text>
            <View style={{marginHorizontal: 10}}>
                <FlatList
                    horizontal
                    data={movieList}
                    renderItem={({ item }) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                />

            </View>

        </View>
    )
}   // AppDrawer
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
        color: 'rgba(255, 255, 255, 0.5)',
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
export default Genre;


