
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user,loader} = useAuth()
    const location = useLocation()

    if(loader){
        return <div className="flex justify-center items-center h-screen"><span className="loading  loading-spinner loading-success loading-lg"></span></div> 
    }
    if(user){
        return children;
    }
    return <Navigate state={location?.pathname || '/'} to={'/login'}></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children:PropTypes.node
}