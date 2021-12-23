/**
 * @copyright Sarwar Hoshen
 */

import React,{useState,useEffect,useRef,useCallback} from 'react';

import {
    View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList, Button,Linking,ActivityIndicator
} from 'react-native';

import api from '../../_cfg/api'
import ui from '../../_cfg/ui'
import FA5Icon from "react-native-vector-icons/FontAwesome5"
import {useDispatch, useSelector} from "react-redux";
import {RdxGetMovie,RdxGetMovieCredits,RdxGetMovieVideos,RdxGetSimilarMovies} from "../../rdx/actions";
import {PlaceholderLoader} from "../_common/loader";
import YoutubePlayer from "react-native-youtube-iframe";
import WatchButton from "../_views/watchBtn";
import MovieCard from "../_views/movieCard";

/**
 */
function MovieDetails( props )
{
    const {params} = props.route
    const dispatch = useDispatch()
    const [movie,setMovie] = useState(null)
    const [credits,setCredits] = useState({})
    const [videos,setVideos] = useState([])
    const [similarMovies,setSimilarMovies] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    useEffect(()=>{

        LoadMovieDetails().catch()

    },[params])
    /**
     */
    const LoadMovieDetails = async () =>
    {
        try
        {
            setIsLoading(true)
            const arr_pr = [
                await dispatch(RdxGetMovie({ id: params.item.id })),
                await dispatch(RdxGetMovieCredits({ id: params.item.id })),
                await dispatch(RdxGetMovieVideos({ id: params.item.id })),
                await dispatch(RdxGetSimilarMovies({ id: params.item.id })),
            ];
            const arr_resp = await Promise.all(arr_pr);
            console.log('data',arr_resp)
            setMovie(arr_resp[0])
            setCredits(arr_resp[1])
            setVideos(arr_resp[2])
            setSimilarMovies(arr_resp[3])

            setIsLoading(false)

        }
        catch (err)
        {
            setIsLoading(false)
            return {err}
        }
    }
    /**
     */
    const RenderItem = ({item}) =>
    {
        const img = item.profile_path ? {uri: [api.imgPath,item.profile_path].join('')} : require('../assets/img/dummy-prof.jpg')
        return (
            <View>
                <Image
                    source={img}
                    style={styles.castPhoto}
                    resizeMode="cover"
                />
                <View style={{justifyContent:'center',alignItems:'center',width: 100,mrginLeft:4}}>
                    <Text style={styles.castTitle}
                          numberOfLines={2}
                          adjustsFontSizeToFit
                    >
                        {item.original_name}
                    </Text>

                    <Text style={[styles.castTitle,{fontSize:9}]}
                          numberOfLines={2}
                          adjustsFontSizeToFit
                    >{item.character ? item.character : item.job ? item.job : ''}</Text>

                </View>
            </View>
        )
    }
    /**
     */
    const RenderSimilarMovies = ({item}) =>
    {
        return (
            <MovieCard item={item}
                       navigation={props.navigation}
            />
        );
    }
    const OpenImdbUrl = ({ url, children }) => {
        const handlePress = useCallback(async () => {
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                await Linking.openURL(url);
            }
        }, [url]);

        return <Button color={'#f3ce13'} title={children} onPress={handlePress} />;
    };

    return (
        isLoading ?
            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                {
                    isLoading &&
                    <ActivityIndicator size="large" color={ui.color.primary_pest} />
                }
            </View>
            :
            <ScrollView style={{flex: 1}}
                        showsVerticalScrollIndicator={false}
            >
                <View style={{flex:1}}>
                    <View>
                        <Text style={[styles.itemText,{margin:10}]}>
                            {params.item.title}
                        </Text>
                    </View>
                    <View>
                        {
                            videos.length ?
                                <YoutubePlayer
                                    webViewStyle={styles.video}
                                    height={200}
                                    play={playing}
                                    videoId={videos[0].key}
                                    onChangeState={onStateChange}
                                />
                                :
                                null
                        }

                    </View>
                </View>
                <View style={{flex:1,flexDirection: 'row'}}>
                    <View style={{width: '40%'}}>
                        <Image
                            source={{
                                uri: params.item.poster_path ? [api.imgPath, params.item.poster_path].join('') : '',
                            }}
                            style={styles.itemPhoto}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={{width: '60%'}}>
                        <View style={{height: 60}}>
                            <ScrollView horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        style={{marginTop: 10,height: 60}}
                            >
                                {
                                    movie && movie.genres.map((x)=>(
                                        <View
                                            style={[styles.genre,styles.shadow]}
                                            key={x.id}
                                        >
                                            <Text style={{fontSize: 14,color:ui.text.light}}
                                                  adjustsFontSizeToFit
                                            >
                                                {x.name}
                                            </Text>

                                        </View>
                                    ))
                                }
                            </ScrollView>
                        </View>

                        <View style={{height: 120}}>
                            <ScrollView showsVerticalScrollIndicator={false}
                            >
                                <Text style={{textAlign:'left',color:ui.text.light,paddingRight: 4,fontSize: 13}}>{movie && movie.overview || '' }</Text>
                            </ScrollView>
                        </View>

                    </View>
                </View>
                <View style={[{flex:1,flexDirection: 'row',marginLeft: 10}]}>
                    <View style={{width:'20%',margin:10,justifyContent: 'center', alignItems: 'center'}}>
                        <FA5Icon name="star" size={24} color={ui.color.primary_pest} />
                        <Text style={{color: ui.text.light}}>{movie?.vote_average || '' }/10</Text>
                        <Text style={{color: ui.text.light,fontSize:12}}>{movie?.vote_count || ''}</Text>
                    </View>
                    <View style={{width:'40%',justifyContent: 'center', alignItems: 'center'}}>
                        {
                            movie &&
                            <WatchButton
                                item={movie}
                                fromDetails={true}
                            />
                        }
                    </View>
                    <View style={{width: '40%',justifyContent:'center',alignItems:'center'}}>
                        <OpenImdbUrl url={[api.imdb,movie.imdb_id].join('')}>IMDb Link</OpenImdbUrl>
                    </View>
                </View>
                <View style={{flex:1}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginLeft: 10,width:5,height:25,backgroundColor: ui.color.primary_pest}}>

                        </View>
                        <Text style={{fontSize: 20,color: ui.text.light,marginLeft:10}}>
                            Cast
                        </Text>
                    </View>
                    <View style={{marginLeft: 5,marginTop:5}}>
                        <FlatList
                            horizontal
                            keyExtractor={(item,index) => index}
                            data={credits.cast ? credits.cast : []}
                            renderItem={RenderItem}
                            showsHorizontalScrollIndicator={false}
                            extraData={credits.cast ? credits.cast : []}
                            initialNumToRender={20}
                        />
                    </View>

                </View>

                <View style={{flex:1}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginLeft: 10,width:5,height:25,backgroundColor: ui.color.primary_pest}}>

                        </View>
                        <Text style={{fontSize: 20,color: ui.text.light,marginLeft:10}}>
                            Crew
                        </Text>
                    </View>
                    <View style={{marginLeft: 5,marginTop:5}}>
                        <FlatList
                            horizontal
                            keyExtractor={(item,index) => index}
                            data={credits.crew ? credits.crew : []}
                            renderItem={RenderItem}
                            showsHorizontalScrollIndicator={false}
                            extraData={credits.crew ? credits.crew : []}
                            initialNumToRender={20}
                        />
                    </View>

                </View>
                <View style={{flex:1}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginLeft: 10,width:5,height:25,backgroundColor: ui.color.primary_pest}}>

                        </View>
                        <Text style={{fontSize: 20,color: ui.text.light,marginLeft:10}}>
                            Releated Movies
                        </Text>
                    </View>
                    <View style={{marginLeft: 5,marginTop:5}}>
                        <FlatList
                            horizontal
                            keyExtractor={(item,index) => index}
                            data={similarMovies}
                            renderItem={RenderSimilarMovies}
                            showsHorizontalScrollIndicator={false}
                            initialNumToRender={10}
                        />
                    </View>

                </View>


            </ScrollView>
    )
}   // MovieCard

export default MovieDetails;

const styles = StyleSheet.create({
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
        padding: 2,
        margin: 2,
        flex:1
    },
    itemPhoto: {
        margin: 10,
        width: 120,
        height: 180,
        borderRadius: 5,
        resizeMode: 'contain',
        // marginRight: 20
    },
    castPhoto: {
        margin: 4,
        width: 100,
        height: 100,
        borderRadius: 5,
        resizeMode: 'contain',
        // marginRight: 20
    },
    itemText: {
        color: ui.text.light,
        marginTop: 8,
        fontWeight: 'bold'
    },
    fav:{
        position:'absolute',
        left: 105,
        bottom: 10,
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: ui.color.primary_light,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
        elevation: 5,
    },
    video:{
        borderColor: ui.text.dark,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    genre:{
        justifyContent: 'center',
        alignItems:'center',
        borderWidth:0.5,
        borderColor: "#000",
        width: 80,
        borderRadius: 1,
        height: 40,
        margin: 2
    },
    castTitle: {
        textAlign:'center',
        color: ui.text.light,
        fontSize:12
    },
    rating:{
        marginLeft: 10,
        borderWidth: 1,
        borderColor: "#505050",
        width: '100%',
        borderRadius: 1,
        height: 80,
        margin: 2
    }
});

