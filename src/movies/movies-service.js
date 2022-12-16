import axios from "axios";
const MOVIE_API_URL = 'http://localhost:4000/movies'

export const createMovie = async (newMovie) => {
    console.log(newMovie);
    const response = await axios.post(MOVIE_API_URL, newMovie)
    const actualMovie = response.data
    return actualMovie
}
export const findAllMovies = async () => {
    const response = await axios.get(MOVIE_API_URL)
    const movies = response.data
    return movies
}
export const updateMovie = async () => {}
export const deleteMovie = async (mid) => {
    const response = await axios.delete(`${MOVIE_API_URL}/${mid}`)
    const status = response.data
    return mid;
}