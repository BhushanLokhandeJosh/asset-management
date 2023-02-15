import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { logoutStart } from "../../../../utils/actions/authActions";

import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loggedInUser, error } = useSelector(
    (state) => state.AuthReducer
  );

  useEffect(() => {
    dispatch(logoutStart(navigate));
  }, []);

  return (
    <div>
      {loggedInUser ? (
        <div className="loader-style">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : error ? (<h2>Error</h2>) : (
        <h2>User Logged Out Successfully...</h2>
      )}
    </div>
  );
};

export default Logout;
