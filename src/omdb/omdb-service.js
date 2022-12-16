import axios from "axios";
import {search} from "../spotify/service";

const SEARCH_URL = 'https://omdbapi.com/?apikey=852159f0&s='
const DETAILS_URL = 'https://omdbapi.com/?apikey=852159f0&i='

export const findMovieBySearchTerm = async (term) => {
    const response = await axios.get(`${SEARCH_URL}${term}`)
    return response.data.Search

}

export const findMovieByImdbId = async (imdbID) => {
    const response = await axios.get(`${DETAILS_URL}${imdbID}`)
    return response.data
}