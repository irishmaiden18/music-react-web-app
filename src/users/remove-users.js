import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllUsersThunk,deleteUserThunk} from "./users-thunk";
import {Link} from "react-router-dom";
import {Navigate, useNavigate} from "react-router";

const RemoveUsers = () => {
    const {users, loading} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])
     if (users.access === "Admin") {
            return (<Navigate to={'/remove-user'}/>)
        }
    return(
        <>
            <h1>Users {users.length}</h1>
            <div className="list-group">
                {
                    users.map((user) =>
                    <Link to={`/remove-user`} key={user._id} className="list-group-item">
                        {user.username}
                        <button className="btn btn-danger"  onClick={() =>
                                                               {dispatch(deleteUserThunk(user._id))}}>
                         Remove
                        </button>
                    </Link>

                    )
                }
            </div>
        </>
    )
}

export default RemoveUsers

