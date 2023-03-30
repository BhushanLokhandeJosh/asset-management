import { useSelector } from "react-redux"


const useAuth = () => {
    const { loggedInUser } = useSelector(state => state.AuthReducer);
    return loggedInUser;
}

export default useAuth;