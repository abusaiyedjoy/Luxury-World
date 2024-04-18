
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user,loader} = useAuth()
    const location = useLocation()

    if(loader){
        return <div className="flex justify-center items-center h-screen"><span className="loading  loading-spinner loading-success loading-lg"></span></div> 
    }
    if(!user){
        return <Navigate to="/login" replace state={{ from: location }}></Navigate>
    }
    return children;
};

PrivateRoute.propTypes = {
    children:PropTypes.node
};
export default PrivateRoute;