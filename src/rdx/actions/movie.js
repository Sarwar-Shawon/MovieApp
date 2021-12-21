/**
 *  @copyright Sarwar Hoshen
 */
import {Get} from "../../handler";
/**
 */
export const RdxMovieListByGenre = (p) => {

    return async (d, gs) =>
    {
        try
        {
            const data = await Get({type: 'discover/movie', sort_by: `&with_genres=${p.id}` })
            return data && data.results.length ? data.results.splice(0,5) : []
        }
        catch( err )
        {
            console.warn( 'actions/movie: RdxMovieListByGenre: err: ', err )

            return Promise.reject( err )
        }
    }

}   // RdxMovieListByGenre
/**
 */
export const RdxMovieListSort = (p) => {

    return async (d, gs) =>
    {
        try
        {
            const data = await Get({type: 'discover/movie', sort_by: p.sort_by || `&sort_by=popularity.desc&with_genres=${p.id}` })
            console.log('data', data)
            return data && data.results.length ? data.results.splice(0,10) : []
        }
        catch( err )
        {
            console.warn( 'actions/movie: RdxMovieListSort: err: ', err )

            return Promise.reject( err )
        }
    }
}   // RdxMovieListSort
/**
 */
export const RdxAddToWatchList = (p) => {

    return async (d, gs) =>
    {
        try
        {
          d(Add(p))
        }
        catch( err )
        {
            console.warn( 'actions/movie: RdxAddToWatchList: err: ', err )

            return Promise.reject( err )
        }
    }
}   // RdxAddToWatchList
/**
 */
export const RdxRemoveFromWatchList = (p) => {

    return async (d, gs) =>
    {
        try
        {
          d(Remove(p))
        }
        catch( err )
        {
            console.warn( 'actions/movie: RdxRemoveFromWatchList: err: ', err )

            return Promise.reject( err )
        }
    }
}   // RdxRemoveFromWatchList
/**
 */
export const Add = ( movie ) =>
{
    return {
        type: 'add:to:watchlist',
        payload: movie,
    }
}   // Add
/**
 */
export const Remove = ( movie ) =>
{
    return {
        type: 'remove:from:watchlist',
        payload: movie,
    }
}   // Remove
