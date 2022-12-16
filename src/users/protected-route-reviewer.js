import {useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router";

const ProtectedRouteReviewer = ({children}) => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    if (currentUser.access === "Reviewer") {
        return (children)
    } else {
        return (<Navigate to={'/'}/>)
    }
}
export default ProtectedRouteReviewer