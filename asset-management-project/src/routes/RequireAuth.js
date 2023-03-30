import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ROUTES } from "./constants";
import { useSelector } from "react-redux";



const RequireAuth = ({ allowedRoles }) => {
    const { loggedInUser } = useSelector(state => state.AuthReducer);
    const location = useLocation();
    console.log(loggedInUser);
    console.log(loggedInUser?.role);
    //Outlet Component refers to any child component of RequireAuth Component.

    return (
        allowedRoles?.includes(loggedInUser?.role)
            ? <Outlet />
            : loggedInUser?.role
                ? <Navigate to={ROUTES.UNAUTHORIZED} state={{ from: location }} replace />
                : <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
    );
}

export default RequireAuth;