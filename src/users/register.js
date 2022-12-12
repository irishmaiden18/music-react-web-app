import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunk";
import {current} from "@reduxjs/toolkit";
import {Navigate} from "react-router";

const Register = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const [firstName, setFn] = useState()
    const [lastName, setLn] = useState()

    const [bio, setBio] = useState()
    const [location, setLocation] = useState()

    const [dateOfBirth, setDob] = useState()
    const [dateJoined, setJoined] = useState()

     const [access, setAccess] = useState()

    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        dispatch(registerThunk({username, password,firstName,lastName,bio,location,dateOfBirth,dateJoined,access}))
    }

    if(currentUser) {
        return (<Navigate to={'/profile'}/>)
    }

    return(
        <>
            <h1>Please Register!</h1>

            <h5><i>First Name:</i>
                         <input
                                         onChange={(e) => setFn(e.target.value)}
                                         className="form-control"
                                         type="text"
                                         value={firstName}/>
                          </h5>

                          <h5><i>Last Name:</i>

                          <input
                                          onChange={(e) => setLn(e.target.value)}
                                          className="form-control"
                                          type="text"
                                          value={lastName}/>
                            </h5>

            <h5><i>Username:</i>
            <input
                                                onChange={(e) => setUsername(e.target.value)}
                                                className="form-control"
                                                value={username}/>

             </h5>

            <h5><i>Password:</i>
            <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"

                type="password"
                value={password}/>
             </h5>


               <h5><i>Bio:</i>
               <input
                               onChange={(e) => setBio(e.target.value)}
                               className="form-control"
                               type="textarea"
                               value={bio}/>
               </h5>

                <h5><i>Location:</i>
                <input
                                onChange={(e) => setLocation(e.target.value)}
                                className="form-control"
                                type="text"
                                value={location}/>
                </h5>

                <h5><i>Date Of Birth:</i>
                <input
                                onChange={(e) => setDob(e.target.value)}
                                className="form-control"
                                type="text"
                                value={dateOfBirth}/>
                </h5>

                <h5><i>Register Date:</i>

              <input
                              onChange={(e) => setJoined(e.target.value)}
                              className="form-control"
                              type="text"
                              value={dateJoined}/>

             </h5>
<h5><i>Access Level:</i>
              <select className="form-control" id="inlineFormCustomSelect"
              onChange={(e) => setAccess(e.target.value)}
              value={access}>
                     <option selected>select</option>
                     <option value="Admin">Admin</option>
                     <option value="Reviewer">Reviewer</option>
                     <option value="User">User</option>
                   </select>
</h5>


            <button
                className="btn btn-primary"
                onClick={handleRegisterBtn}>
                Register
            </button>

            {
                currentUser &&
                <h1>Welcome,{currentUser.firstName}!</h1>
            }
        </>
    )
}
export default Register