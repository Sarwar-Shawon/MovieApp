/**
 * @copyright   CallACab
 */
import api from '../_cfg/api'

async function Get (p)
{
    try
    {
        let myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders
        };
        // console.log('api:::',[api.url , p.type , '?api_key=' , api.apiKey, p.sort_by || ''].join(''))
        const response = await fetch( [api.url , p.type , '?api_key=' , api.apiKey, p.sort_by || ''].join(''), requestOptions)
        let resp = await response.json();
        return resp
    }
    catch (err)
    {
       return {err}
    }
}//Get

async function Post (p)
{
    try
    {
        let myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: p.data,
        };

        const response = await fetch([api.url,p.type].join('/'), requestOptions)

        let json = await response.json();

        console.log("result", json)

        return {resp:{...json},msg:"ok"}

    }
    catch (err)
    {
        return {err}
    }
}//Post

export {Get,Post}
