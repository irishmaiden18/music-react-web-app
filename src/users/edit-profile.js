import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import "./edit-profile.css";
import React, {useState} from "react";
import {usersReducer} from "./users-reducer";
import {updateUserThunk} from "./users-thunk";


const EditProfile = (newData) => {


const {currentUser} = useSelector((state) => state.users)
let [firstNameInput, setFirstNameInput] = useState(currentUser.firstName);
let [lastNameInput, setLastNameInput] = useState(currentUser.lastName);
let [bioInput, setBioInput] = useState(currentUser.bio);
let [locationInput, setLocationInput] = useState(currentUser.location);
const navigate = useNavigate()
const dispatch = useDispatch();
 const cancelChanges = () => {
        navigate("/profile");
    }
    const profileClickHandler = () => {
        const profileChanges = {
            users: newData = {


                    "_id":currentUser._id,
                    "username": currentUser.username,
                    "password":currentUser.password,
                    "firstName": firstNameInput,
                    "lastName": lastNameInput,
                    "bio":bioInput,
                    "location":locationInput,
                    "dateOfBirth":currentUser.dateOfBirth,
                    "dateJoined":currentUser.dateJoined,
                    "access":currentUser.access



            }
        }
//        console.log(profileChanges.users._id)
        dispatch(updateUserThunk(profileChanges));

        navigate("/profile");
    }

    return(
        <>
            {
                currentUser &&
                <h2>Edit Profile</h2>
            }

        </>
    )
}

export default EditProfile
