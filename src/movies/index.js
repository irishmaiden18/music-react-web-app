import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createMoviesThunk, deleteMovieThunk, findAllMoviesThunk} from "./movies-thunks";
import {userLikesMovieThunk} from "../likes/likes-thunks";
import "./index.css";

const Movies = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {movies} = useSelector((state) => state.movies)
    const [movie, setMovie] = useState({title: 'New Song'})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllMoviesThunk())
    }, [])
    return(
        <>

            {
                currentUser &&
                <h1 className="pb-3 pt-4">Welcome to Song Search {currentUser.username}!</h1>
            }
            <ul className="list-group">
                <li className="list-group-item">
                    <button className="btn btn-primary float-end col-2" onClick={() => {
                        dispatch(createMoviesThunk(
                            {
                                title: movie.title
                            }
                        ))
                    }}>Create Song</button>
                    <input
                        className="form-control" style={{width: 83.3333333 + '%'}}
                        onChange={(e) =>
                            setMovie({...movie, title: e.target.value})}
                        value={movie.title}/>
                </li>
                {
                    movies.map((movie) =>
                        <li className="list-group-item"
                            key={movie._id}>
                            <i onClick={() => {
                                dispatch(deleteMovieThunk(movie._id))
                            }}
                                className="bi bi-trash float-end"></i>

                            <i onClick={() => {
                                dispatch(userLikesMovieThunk({
                                    mid: movie._id
                                }))
                            }} className={`${currentUser? '' : 'd-none'} float-end bi bi-hand-thumbs-up me-2`}></i>
                            <i className={`${currentUser? '' : 'd-none'} float-end bi bi-hand-thumbs-down me-2`}></i>


                            {movie.title}
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default Movies;