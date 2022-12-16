import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "./users-thunk";
import {Navigate, useNavigate} from "react-router";
import {Link} from "react-router-dom";

const Login = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLoginBtn = () => {
        try {
            dispatch(loginThunk({username, password}))
//             navigate('/profile')
        } catch (e) {

        }
    }
    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }
    return(
        <>
            <h1>Please, Login!</h1>

            <h5><i>UserName:</i>
            <input
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                value={username}/>
             </h5>
             <h5><i>Password:</i>
            <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-control" type="password" value={password}/>
                </h5>
            <button
                className="btn btn-primary"
                onClick={handleLoginBtn}>Login
                </button>
<br/>
                <Link to="/register">
                    <h6>Dont have an account?</h6>
                </Link>

        </>
    )
}
export default Login