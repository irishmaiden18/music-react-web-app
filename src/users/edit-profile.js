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


            <div className="border border-2 p-1 pt-0 mb-3 rounded nameTextAreaWidth">
                <label htmlFor="firstNameInput" className="smallText nameTextAreaWidth">First Name
                    <input type="text" id="firstNameInput" className="border-0 nameTextArea nameTextAreaWidth" value={firstNameInput}
                           placeholder={currentUser.firstName}
                           onChange={(event) => setFirstNameInput(event.target.value)}>
                    </input>
                </label>
            </div>

            <div className="border border-2 p-1 pt-0 mb-3 rounded nameTextAreaWidth">
                <label htmlFor="lastNameInput" className="smallText nameTextAreaWidth">Last Name
                    <input type="text" id="lastNameInput" className="border-0 nameTextArea nameTextAreaWidth" value={lastNameInput} placeholder={currentUser.lastName}
                           onChange={(event) => setLastNameInput(event.target.value)}>
                    </input>
                </label>
            </div>

            <div className="border border-2 p-1 pt-0 mb-3 rounded nameTextAreaWidth">
                <label htmlFor="bioInput" className="smallText nameTextAreaWidth">Bio
                    <textarea id="bioInput" className="border-0 nameTextArea nameTextAreaWidth" value={bioInput} placeholder={currentUser.bio}
                              onChange={(event) => setBioInput(event.target.value)}>
                                         </textarea>
                </label>
            </div>

            <div className="border border-2 p-1 pt-0 mb-3 rounded nameTextAreaWidth">
                <label htmlFor="locationInput" className="smallText nameTextAreaWidth">Location
                    <input id="locationInput" className="border-0 nameTextArea nameTextAreaWidth" value={locationInput} placeholder={currentUser.location}
                           onChange={(event) => setLocationInput(event.target.value)}>
                    </input>
                </label>
            </div>

            <button className="border rounded-pill fw-bold editProfileButton px-3 mb-2" onClick={profileClickHandler}>Save</button>
            <button className="border rounded-pill fw-bold editProfileButton px-3 mb-2" onClick={cancelChanges}>Cancel</button>

        </>
    )
}

export default EditProfile