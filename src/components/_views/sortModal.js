import React, {useState} from 'react';
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Platform,
    Dimensions,
    StyleSheet,
    FlatList
} from 'react-native';
import MCIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import ui from '../../_cfg/ui'
import Modal from "react-native-modal";
import {ShowAlert} from '../_views/ShowAlert'
//
const SortModal = (props) => {

    const _selType = [
        {label: 'Ascending', val: 'asc'},
        {label: 'Descending', val: 'desc'},
    ]
    const deviceHeight = Dimensions.get("window").height
    const [isModal, IsModal] = useState(false);
    const [popularity, SetPopularity] = useState('desc')
    const [avgRating, SetAvgRating] = useState('')
    const [countRating, SetcountRating] = useState('')

    const title = [popularity ? 'Popularity,' : '',avgRating ? 'Avg Rating,' : '' , countRating ? 'Rating Count,' : '' ].join('')
    /**
     */
    const OnFindPress = async () =>
    {
        try {
            let query = [popularity ? 'popularity.'+popularity+',' : '',avgRating ? 'vote_average.'+avgRating+',' : '' , countRating ? 'vote_count.'+countRating+',' : '' ].join('')
            query = query.substring(0, query.length - 1)
            console.log("query",query)
            if(query){
                props.OnSortChange(query)
                IsModal(false)

            }
            else
            {
                ShowAlert({
                    title: 'Error', msg: `Please select an option`
                })
            }


        }
        catch (err) {
            return {err}
        }
    }
    return (
        <View>
            <TouchableOpacity style={{flexDirection: 'row',marginLeft: 30}}
                              onPress={() => IsModal(true)}

            >
                <Text style={[styles.itemText,{fontSize: 16}]}>
                    Sort By: {title.substring(0, title.length - 1)}
                </Text>
                <MCIcon name={'arrow-collapse-up'} size={20} color={ui.text.light}/>

            </TouchableOpacity>

            <>
                <Modal
                    animationIn={"slideInUp"}
                    isVisible={isModal}

                >
                    <View style={{flex: 1}}>
                        <TouchableWithoutFeedback onPress={() => IsModal(false)}>
                            <View style={{flex:1,backgroundColor: 'rgba(0,0,0,.5)'}}></View>
                        </TouchableWithoutFeedback>

                        <View style={ {
                            height: '50%',
                            backgroundColor: ui.color.primary,
                            borderRadius: 12,
                            padding:16,
                            position:"absolute",
                            width:"100%",
                            bottom: '25%',
                            Top: '25%'
                        }}>
                            <View style={{height: '100%', margin: 20,marginTop: 40}}>
                                <View style={{height:'20%',marginBottom: 10}}>
                                    <Text style={[styles.itemText,{marginBottom: 10}]}>Popularity</Text>
                                    <FlatList
                                        data={_selType}
                                        renderItem={({item}) => {
                                            return (
                                                <TouchableOpacity
                                                    style={{ flex: 1,marginLeft: 5}}
                                                    onPress={() => SetPopularity(popularity === item.val ? '' : item.val)}
                                                >
                                                    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                                                        <View style={{width: '20%'}} >
                                                            {
                                                                popularity === item.val ?
                                                                    <MCIcon name="checkbox-blank-circle" size={20}
                                                                            color={"#87ceeb"}/> :
                                                                    <MCIcon name="checkbox-blank-circle-outline" size={20}
                                                                            color={"#ddd"}/>
                                                            }
                                                        </View>
                                                        <View style={{width: '80%'}} >
                                                            <Text allowFontScaling={false}
                                                                  style={styles.tabOption}>{item.label}</Text>
                                                        </View>
                                                    </View>

                                                </TouchableOpacity>
                                            )
                                        }}
                                        numColumns={2}
                                        keyExtractor={(item, index) => item.key ? item.key : index}
                                    />
                                </View>
                                <View style={{height:'20%',marginBottom: 10}}>
                                    <Text style={[styles.itemText,{marginBottom: 10}]}>Rating Average</Text>
                                    <FlatList
                                        data={_selType}
                                        renderItem={({item}) => {
                                            return (
                                                <TouchableOpacity
                                                    style={{ flex: 1,marginLeft: 5}}
                                                    onPress={() => SetAvgRating(avgRating === item.val ? '' : item.val)}
                                                >
                                                    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                                                        <View style={{width: '20%'}} >
                                                            {
                                                                avgRating === item.val ?
                                                                    <MCIcon name="checkbox-blank-circle" size={20}
                                                                            color={"#87ceeb"}/> :
                                                                    <MCIcon name="checkbox-blank-circle-outline" size={20}
                                                                            color={"#ddd"}/>
                                                            }
                                                        </View>
                                                        <View style={{width: '80%'}} >
                                                            <Text allowFontScaling={false}
                                                                  style={styles.tabOption}>{item.label}</Text>
                                                        </View>
                                                    </View>

                                                </TouchableOpacity>
                                            )
                                        }}
                                        numColumns={2}
                                        keyExtractor={(item, index) => item.key ? item.key : index}
                                    />

                                </View>
                                <View style={{height:'20%',marginBottom: 10}}>
                                    <Text style={[styles.itemText,{marginBottom: 10}]}>Rating Count</Text>
                                    <FlatList
                                        data={_selType}
                                        renderItem={({item}) => {
                                            return (
                                                <TouchableOpacity
                                                    style={{ flex: 1,marginLeft: 5}}
                                                    onPress={() => SetcountRating(countRating === item.val ? '' : item.val)}
                                                >
                                                    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                                                        <View style={{width: '20%'}} >
                                                            {
                                                                countRating === item.val ?
                                                                    <MCIcon name="checkbox-blank-circle" size={20}
                                                                            color={"#87ceeb"}/> :
                                                                    <MCIcon name="checkbox-blank-circle-outline" size={20}
                                                                            color={"#ddd"}/>
                                                            }
                                                        </View>
                                                        <View style={{width: '80%'}} >
                                                            <Text allowFontScaling={false}
                                                                  style={styles.tabOption}>{item.label}</Text>
                                                        </View>
                                                    </View>

                                                </TouchableOpacity>
                                            )
                                        }}
                                        numColumns={2}
                                        keyExtractor={(item, index) => item.key ? item.key : index}
                                    />

                                </View>
                                <View style={{height:'20%',justifyContent: 'center', alignItems:'center',}}>
                                    <TouchableOpacity
                                        style={styles.btn}
                                        onPress={OnFindPress}
                                    >
                                        <Text style={{fontSize: 20,color:ui.text.light}}>{'Find'}</Text>

                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                    </View>
                </Modal>

            </>
        </View>

    );
};   // SortModal

const styles = StyleSheet.create({
    itemText: {
        fontSize:20,
        color: ui.text.light,
    },
    tabOption: {
        fontSize:16,
        color: ui.text.light
    },
    btn:{
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
        borderWidth: 2,
        borderColor: ui.text.light,
        width: 80,
        height: 40
    }
});

export default SortModal

