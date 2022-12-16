import {useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router";

const ProtectedRouteAdmin = ({children}) => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    if (currentUser.access === "Admin") {
        return (children)
    } else {
        return (<Navigate to={'/'}/>)
    }
}
export default ProtectedRouteAdmin