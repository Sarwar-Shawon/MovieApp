/**
 * @copyright Sarwar Hoshen
 */
export default (state = {
    watchList: [],
    watchListObj: {},
    ts: 0
},action)=>{

    switch (action.type) {

        case 'add:to:watchlist':
            if(!state.watchListObj[action.payload.id])
            {
                state.watchListObj[action.payload.id] = action.payload
                state.watchList.push(state.watchListObj[action.payload.id])
            }
            // const _movie = state.watchList.find( x => x.id === action.payload.id )
            // if(!_movie )
            //     state.watchList.push(action.payload)
            return { ...state, ts: Date.now() }

        case 'remove:from:watchlist':
            if(state.watchListObj[action.payload.id])
            {
                delete state.watchListObj[action.payload.id]
                const idx = state.watchList.findIndex( x => x.id === action.payload.id )
                if(idx !== -1)
                {
                    state.watchList.splice(idx,1)
                }
            }
            console.log("state.watchList",state.watchList)
            return {...state, ts: Date.now()}

        default:
            return state
    }

}
