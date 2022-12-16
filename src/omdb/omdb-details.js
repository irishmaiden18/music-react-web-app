import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findMovieByImdbIdThunk} from "./omdb-thunks";
import {createReviewThunk, findReviewsByMovieThunk} from "../reviews/reviews-thunks";
import {Link} from "react-router-dom";
import {findMovieByImdbId} from "./omdb-service";

const OmdbDetails = () => {
    const {imdbID} = useParams()
    console.log({imdbID})
    // const [review, setReview] = useState('')
    // const {reviews} = useSelector((state) => state.reviews)
    //console.log('reviews: ' + reviews.state)
    //const {details} = useSelector((state) => state.imdbID)
    var details = null;
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findMovieByImdbIdThunk(imdbID))
        //details = findMovieByImdbId(imdbID);
        console.log("useEffect happened")
        //dispatch(findReviewsByMovieThunk(imdbID))
    },[])
    // const handlePostReviewBtn = () => {
    //     dispatch(createReviewThunk({
    //                                    review,
    //                                    imdbID
    //                                }))
    // }
    console.log("details1" + JSON.stringify(details));
    if (details) {
        console.log("executing if statement");
        return (
            <>
                <h1>{details.name}</h1>
                <div className="row">
                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item">Are the Lyrics
                                Explicit? {details.explicit}</li>
                            <li className="list-group-item">Album
                                Art: {details.album.images[0].url}</li>
                            <li className="list-group-item">Artist: {details.artists.name}</li>
                            <li className="list-group-item">Song
                                Duration: {details.duration_ms}</li>
                            <li className="list-group-item">Album: {details.album.name}</li>
                            <li className="list-group-item">Track on
                                Album: {details.track_number}</li>
                            <li className="list-group-item">Total Tracks on
                                Album: {details.album.total_tracks}</li>
                            <li className="list-group-item">Album Release
                                Date: {details.album.release_date}</li>
                            <li className="list-group-item">Available
                                Markets: {details.album.available_markets}</li>
                            <li className="list-group-item">Find this song on
                                Spotify!: {details.external_urls.spotify}</li>
                        </ul>
                    </div>
                </div>
                {
                    // currentUser &&
                    // <div>
                    //     <textarea
                    //         onChange={(e) => setReview(e.target.value)}
                    //         className="form-control"></textarea>
                    //     <button onClick={handlePostReviewBtn}>Post Review</button>
                    // </div>
                }
                {/*<ul className="list-group">*/}
                {/*    {*/}
                {/*        reviews.map((review) =>*/}
                {/*                        <li className="list-group-item">*/}
                {/*                            {review.review}*/}
                {/*                            <Link to={`/profile/${review.author._id}`} className="float-end">*/}
                {/*                                {review.author.username}*/}
                {/*                            </Link>*/}
                {/*                        </li>*/}
                {/*        )*/}
                {/*    }*/}
                {/*</ul>*/}
                <pre>
                {JSON.stringify(details, null, 2)}
            </pre>
            </>
        )
    }
}

export default OmdbDetails