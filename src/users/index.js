import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllUsersThunk} from "./users-thunk";
import {Link} from "react-router-dom";

const Users = () => {
    const {users, loading} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])
    return(
        <>
            <h2 className="pb-3 pt-4">Active Users </h2>
            <div className="list-group">
                {
                    users.map((user) =>
                    <Link to={`/profile/${user._id}`} key={user._id} className="list-group-item">
                        {user.username}
                    </Link>
                    )
                }
            </div>
            <h3 className="pb-3 pt-4">(Total Users: {users.length})</h3>
        </>
    )
}

export default Users