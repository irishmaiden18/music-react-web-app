import Movies from "./movies";
import moviesReducer from "./movies/movies-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import omdbReducer from "./omdb/omdb-reducer";
import OmdbSearch from "./omdb/omdb-search";
import {likesReducer} from "./likes/likes-reducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./navigation";
import Users from "./users";
import usersReducer from "./users/users-reducer";
import Login from "./users/login";
import Register from "./users/register";
import CurrentUser from "./users/current-user";
import Profile from "./users/profile";
import ProtectedRoute from "./users/protected-route";
import OmdbDetails from "./omdb/omdb-details";
import reviewsReducer from "./reviews/reviews-reducer";
import PublicProfile from "./users/public-profile";
import followsReducer from "./follows/follows-reducer";
import EditProfile from "./users/edit-profile";
import Home from "./users/home";
import ProtectedRouteAdmin from "./users/protected-route-admin";
import ProtectedRouteReviewer from "./users/protected-route-reviewer";
import RemoveUsers from "./users/remove-users";
import Spotify from "./spotify";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        omdb: omdbReducer,
        likes: likesReducer,
        users: usersReducer,
        reviews: reviewsReducer,
        follows: followsReducer
    }
})

function App() {
    return (
        <div className="container mt-4 mb-4">
            <Provider store={store}>
                <BrowserRouter>
                    <CurrentUser>
                        <h1>NEW</h1>
                        <Navigation/>
                        <Routes>
                            <Route path="/spotify" element={<Spotify/>}/>
                            <Route index element={<Home/>}/>
                            <Route index element={<Movies/>}/>
                            <Route path="/search" element={<OmdbSearch/>}/>
                            <Route path="/users" element={
                                <ProtectedRoute>
                                    <Users/>
                                </ProtectedRoute>
                            }/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/profile" element={
                                <ProtectedRoute>
                                    <Profile/>
                                </ProtectedRoute>
                            }/>
                            <Route path="/edit-profile" element={
                                                            <ProtectedRoute>
                                                                <EditProfile/>
                                                            </ProtectedRoute>
                                                        }/>
                             <Route path="/newsongs" element={
                                  <ProtectedRouteAdmin>
                                   <Movies/>
                                  </ProtectedRouteAdmin>
                                   }/>

                              <Route path="/remove-user" element={
                                      <ProtectedRouteAdmin>
                                          <RemoveUsers/>
                                       </ProtectedRouteAdmin>
                                       }/>
                            <Route path="/omdb-details/:imdbID" element={<OmdbDetails/>}/>
                            <Route path="/profile/:uid" element={<PublicProfile/>}/>

                        </Routes>
                    </CurrentUser>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
