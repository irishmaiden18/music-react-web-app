import axios from "axios";
import {requestToken, search, getTrack} from "../spotify/service";

const SEARCH_URL = 'https://omdbapi.com/?apikey=852159f0&s='
const DETAILS_URL = 'https://omdbapi.com/?apikey=852159f0&i='

const token=null;

export const findMovieBySearchTerm = async (term) => {
    // const response = await axios.get(`${SEARCH_URL}${term}`)
    // return response.data.Search

    let token = await requestToken()
    const items = await search(token, term)
    return items
}

export const findMovieByImdbId = async (imdbID) => {
    //const response = await axios.get(`${DETAILS_URL}${imdbID}`)
    console.log("find movie called");
    let token = await requestToken()
    const items = await getTrack(token, imdbID)
    return items;



    //return items

}