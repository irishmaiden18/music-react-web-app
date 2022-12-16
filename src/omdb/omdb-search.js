import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findMovieBySearchTermThunk} from "./omdb-thunks";
import {userLikesMovieThunk} from "../likes/likes-thunks";

const OmdbSearch = () => {
    let searchTerm = "";
    let setSearchTerm = "";
    [searchTerm, setSearchTerm] = useState('over the rainbow')
    const {movies, loading} = useSelector((state) => state.omdb)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findMovieBySearchTermThunk(searchTerm))
    }, [])
    var detailspage = "";
    return (
        <>
            <h2 className="pt-4 pb-3">Search for Songs</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        className="btn btn-primary float-end col-1"
                        onClick={() => {
                            dispatch(findMovieBySearchTermThunk(searchTerm))
                        }}>Search
                    </button>
                    <input
                        className="form-control" style={{width: 91.66666667 + '%'}}
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                        }}
                        value={searchTerm}/>
                </li>
                {
                    movies && movies.map((movie) =>
                        <li key={movie.imdbID} className="list-group-item">
                            {/*{detailspage = "omdb-details/" + movie.id}*/}
                            {/*<i onClick={() => {*/}
                            {/*    dispatch(userLikesMovieThunk({*/}
                            {/*        uid: 111, mid: movie.imdbID*/}
                            {/*    }))*/}
                            {/*}} className="float-end bi bi-hand-thumbs-up"></i>*/}
                            {/*<i className="float-end bi bi-hand-thumbs-down me-2"></i>*/}

                            {/*album image*/}
                            <img src={movie.album.images[0].url} className="float-start" height={75} alt=''/>

                            {/*song name*/}
                            <span className="ps-5 float-start"><a href={detailspage}>{movie.name}</a></span>

                            {/*artist name*/}
                            <span className="ps-5 float-start">{movie.album.artists[0].name}</span>

                            {/*album name*/}
                            {/*<span className="ps-5 float-start">{movie.album.name}</span>*/}

                            {/*spotify link*/}
                            <span className="ps-5 pe-5 float-end text-white"><a href={movie.external_urls.spotify}><button className="btn btn-success float-end text-white">Go to Spotify</button></a></span>
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

export default OmdbSearch;