/**
 *  @copyright Sarwar Hoshen
 */

import React, {useState} from 'react'

import {
    View, Text,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    StatusBar, SafeAreaView,
    StyleSheet, Image,
} from 'react-native'

import FA5Icon from "react-native-vector-icons/FontAwesome5"
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import ui from '../../_cfg/ui'
// const ftrData = ['Home', 'Movie','Favourite']
/**
 */
const Footer = () =>
{
    const [type,setType] = useState('home')

    /**
	 */
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <TouchableOpacity style={styles.item}
                                  onPress={() => {}}
                >
                    <View>
                        <FA5Icon name="home" size={24} color={ui.color.lightBackground}/>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
                <TouchableOpacity style={styles.item}
                                  onPress={() => {}}
                >
                    <View>
                        <FA5Icon name="home" size={24} color={ui.color.lightBackground}/>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
                <TouchableOpacity style={styles.item}
                                  onPress={() => {}}
                >
                    <View>
                        <FA5Icon name="home" size={24} color={ui.color.lightBackground}/>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
                <TouchableOpacity style={styles.item}
                                  onPress={() => {}}
                >
                    <View>
                        <FA5Icon name="home" size={24} color={ui.color.lightBackground}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}   // fuc Footer

export default Footer;

const styles = StyleSheet.create( {
    container: {
        flexDirection: 'row',
        height: 50,
        borderTopWidth:0.5,
        backgroundColor: ui.color.primary,
        elevation:2
    },
    item: {
        flex: 1,
        alignItems: 'center', justifyContent: 'center',
    },
})







