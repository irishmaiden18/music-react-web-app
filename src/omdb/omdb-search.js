import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findMovieBySearchTermThunk} from "./omdb-thunks";
import {userLikesMovieThunk} from "../likes/likes-thunks";
import {Link} from "react-router-dom";

const OmdbSearch = () => {
    const [searchTerm, setSearchTerm] = useState('Avatar')
    const {movies, loading} = useSelector((state) => state.omdb)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findMovieBySearchTermThunk(searchTerm))
    }, [])
    return (
        <>
            <h1>Song Search</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        className="btn btn-primary float-end"
                        onClick={() => {
                            dispatch(findMovieBySearchTermThunk(searchTerm))
                        }}>Search
                    </button>
                    <input
                        className="form-control w-75"
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                        }}
                        value={searchTerm}/>
                </li>
                {
                    movies && movies.map((movie) =>
                        <li key={movie.imdbID} className="list-group-item">
                            <i onClick={() => {
                                dispatch(userLikesMovieThunk({
                                    uid: 111, mid: movie.imdbID
                                }))
                            }} className="float-end bi bi-hand-thumbs-up"></i>
                            <i className="float-end bi bi-hand-thumbs-down me-2"></i>
                            <img src={movie.Poster} height={50}/>
                            <Link to={`/details/${movie.imdbID}`}>
                                {movie.Title}
                            </Link>
                        </li>
                    )
                }
            </ul>
            <pre>
                {JSON.stringify(movies, null, 2)}
            </pre>
        </>
    )
}

export default OmdbSearch