/**
 * @copyright Sarwar Hoshen
 */
export default ( state = {
    genreList: [],
},action)=>{

    switch (action.type) {

        case 'store:genre':
            return {...state, genreList: action.payload}
        default:
            return state
    }

}
