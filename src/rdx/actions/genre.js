/**
 *  @copyright Sarwar Hoshen
 */
import {Get} from "../../handler";

export const RdxGenreList = () => {

    return async (d, gs) =>
    {
        try
        {
            const data = await Get({type: 'genre/movie/list'})

            d(StoreGenre(data))

            return data
        }
        catch( err )
        {
            console.warn( 'actions/driverCom: RdxGenreList: err: ', err )

            return Promise.reject( err )
        }
    }

}

const StoreGenre = (data) =>{

    return {
        type: 'store:genre',
        payload: data
    }
}
