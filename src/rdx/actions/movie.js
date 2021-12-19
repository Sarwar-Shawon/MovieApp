/**
 *  @copyright Sarwar Hoshen
 */
import {Get} from "../../handler";

export const RdxMovieListByGenre = (p) => {

    return async (d, gs) =>
    {
        try
        {
            const data = await Get({type: 'discover/movie', sort_by: `&with_genres=${p.id}` })
            // console.log('data', data)
            return data && data.results.length ? data.results.splice(0,5) : []
        }
        catch( err )
        {
            console.warn( 'actions/driverCom: RdxMovieList: err: ', err )

            return Promise.reject( err )
        }
    }

}
