/**
 * @copyright Sarwar Hoshen
 */
export default (state = {
    watchList: [],
    watchListObj: {},
    visitHistory: [],
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
            return {...state, ts: Date.now()}

        case 'movie:visit:history':
            console.log("action.payload",action.payload)
            console.log("state.visitHistory",state.visitHistory)

            const idx = state.visitHistory.findIndex( x => x.id === action.payload.id )
            if(idx !== -1)
            {
                state.visitHistory[idx].dt_view = Date.now()
            }
            else
            {
                action.payload.dt_view = Date.now()
                state.visitHistory.push(action.payload)
            }
            state.visitHistory.sort((a, b) => b.dt_view - a.dt_view)
            console.log("state.visitHistory",state.visitHistory)
            return {...state, ts: Date.now()}

        default:
            return state
    }

}
