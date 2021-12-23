/**
 * @copyright Sarwar Hoshen
 */

import React,{useState,useEffect,useRef} from 'react';

import {
    Text, TouchableOpacity, View
} from 'react-native';
import ui from '../../_cfg/ui'
import FA5Icon from "react-native-vector-icons/FontAwesome5"
import {useDispatch, useSelector} from "react-redux";
import {RdxAddToWatchList, RdxRemoveFromWatchList} from "../../rdx/actions";

/**
 */
function WatchButton( props )
{
    const watchListObj = useSelector(state => state.__movie.watchListObj)
    const [watchStatus,setWatchStatus] = useState(watchListObj[props.item.id] ? true : false)
    const [changeState,setChangeState] = useState(null)
    const dispatch = useDispatch()

    const WatchListUpd = () =>
    {
        setWatchStatus(!watchStatus)
        setChangeState(true)
    }

    useEffect(()=>{
        if(changeState)
        {
            if(watchStatus)
                dispatch(RdxAddToWatchList(props.item)).catch()
            else
                dispatch(RdxRemoveFromWatchList(props.item)).catch()
        }
    },[changeState])

    return (

            props.fromDetails
            ?
            <TouchableOpacity style={{flexDirection: 'row'}}
                              onPress={()=> WatchListUpd()  }
            >
                <View style={{marginRight: 5,justifyContent: 'center', alignItems: 'center'}}>
                    <FA5Icon name={watchStatus? "check" : "plus"} size={14} color={ watchStatus ? ui.color.primary_pest : ui.text.light} />
                </View>
                <View>
                    <Text style={{color: watchStatus ? ui.color.primary_pest : ui.text.light ,fontSize:16, fontWeight: 'bold'}}>{watchStatus? 'Remove from Watchlist' : 'Add to Watchlist'}</Text>
                </View>
            </TouchableOpacity>
            :
            <TouchableOpacity style={[props.style,{backgroundColor: watchStatus ? '#50C77B' : ui.color.primary_light }]}
                              onPress={()=> WatchListUpd()  }
            >
                <Text>
                    <FA5Icon name={watchStatus ? 'check' : 'plus'} size={20}
                             color={!watchStatus ? '#50C77B' : ui.text.dark}/>
                </Text>
            </TouchableOpacity>
    )
}   // WatchButton

export default WatchButton;

