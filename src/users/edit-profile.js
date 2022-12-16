
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "./profile.css";
import currentUser from "./current-user";


const editProfile = () => {

    return(
        <>
            {
                currentUser &&
                <h2>Edit Profile</h2>
            }
        </>
    )
}
export default editProfile