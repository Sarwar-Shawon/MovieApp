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
export const RdxGetMovie = (p) => {

    return async (d, gs) =>
    {
        try
        {
            const data = await Get({type: `movie/${p.id}` })
            // console.log('data', data)
            return data ? data : ''
        }
        catch( err )
        {
            console.warn( 'actions/movie: RdxGetMovie: err: ', err )

            return Promise.reject( err )
        }
    }
}   // RdxGetMovie
/**
 */
export const RdxGetMovieCredits = (p) => {

    return async (d, gs) =>
    {
        try
        {
            const data = await Get({type: `movie/${p.id}/credits` })
            // console.log('data', data)
            return data ? data : ''
        }
        catch( err )
        {
            console.warn( 'actions/movie: RdxGetMovieCredits: err: ', err )

            return Promise.reject( err )
        }
    }
}   // RdxGetMovieCredits
/**
 */
export const RdxGetMovieVideos = (p) => {

    return async (d, gs) =>
    {
        try
        {
            const data = await Get({type: `movie/${p.id}/videos` })
            console.log('data', data)
            const trailer = data.results ? data.results.filter(x=> x.type === "Trailer") : null
            return trailer
        }
        catch( err )
        {
            console.warn( 'actions/movie: RdxGetMovieVideos: err: ', err )

            return Promise.reject( err )
        }
    }
}   // RdxGetMovieVideos
/**
 */
export const RdxGetSimilarMovies = (p) => {

    return async (d, gs) =>
    {
        try
        {
            const data = await Get({type: `movie/${p.id}/similar` })
            console.log('data', data)
            const trailer = data.results ? data.results : null
            return trailer
        }
        catch( err )
        {
            console.warn( 'actions/movie: RdxGetSimilarMovies: err: ', err )

            return Promise.reject( err )
        }
    }
}   // RdxGetSimilarMovies
/**
 */
export const RdxSearchMovie = (p) => {

    return async (d, gs) =>
    {
        try
        {
            const data = await Get({type: `search/movie`,sort_by: `&query=${p.val}` })
            return data.results ? data.results : []
        }
        catch( err )
        {
            console.warn( 'actions/movie: RdxSearchMovie: err: ', err )

            return Promise.reject( err )
        }
    }
}   // RdxSearchMovie


/**
 */
export const RdxMovieVisitHistory = (p) => {

    return async (d, gs) =>
    {
        try
        {
           d(VisitHistory(p))
        }
        catch( err )
        {
            console.warn( 'actions/movie: RdxMovieVisitHistory: err: ', err )

            return Promise.reject( err )
        }
    }
}   // RdxMovieVisitHistory

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
/**
 */
export const VisitHistory = ( movie ) =>
{
    return {
        type: 'movie:visit:history',
        payload: movie,
    }
}   // VisitHistory
