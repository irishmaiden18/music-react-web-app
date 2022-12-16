import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "./users-thunk";
import Follows from "../follows/follows";
import Likes from "../likes/likes";
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "./profile.css";


const Profile = () => {

    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')


    }
    return(
        <>
            {
                currentUser &&
                <h2>Welcome, {currentUser.firstName}!</h2>
            }
 <div className="row">
             <div className="pb-4 mb-5">
                                 <div className="banner"><img width="100%" min-height="150px" src="background.png" alt=''/></div>

                                     <img className="rounded-circle avatarIcon border border-3"
                                          src="profilepic.jpeg"
                                          alt=''/>
                                     <button className="border rounded-pill fw-bold float-end profileButton" onClick={() => navigate("/edit-profile")}>Edit Profile</button>

               </div>
               <div>
                                   <h3 className="fw-bold mb-0">{currentUser.firstName}&nbsp;{currentUser.lastName}</h3>
                                   <div className="text-secondary pb-0">{currentUser.username}</div>
                                   <h6 className="fw-bold mb-0">{currentUser.access}</h6>
                                   <div className="pt-3">{currentUser.bio}</div>
                                   <div className="icons text-secondary">
                                       <div><i className="bi bi-geo-alt"></i><span>{currentUser.location}</span></div>
                                       <div><i className="bi bi-balloon"></i><span>Birthday:</span>&nbsp;<span className="me-3">{currentUser.dateOfBirth}</span></div>
                                       <div><i className="bi bi-calendar3"></i><span>Joined:</span>&nbsp;<span>{currentUser.dateJoined}</span></div>

                                   </div>

               </div>
</div>
            <button
                className="btn btn-danger"
                onClick={handleLogoutBtn}>
                Logout
            </button>


        </>
    )
}
export default Profile