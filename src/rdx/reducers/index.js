/**
 * @copyright Sarwar Hoshen
 */

import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

/**
 */
const persist_cfg = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [

    ],
}

/**
 */
const rdx_reduers = combineReducers( {

} )

/**
 */
export default persistReducer( persist_cfg, rdx_reduers )


