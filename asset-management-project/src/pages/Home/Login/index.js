import { Link } from "react-router-dom";
import Login from "./component";
import { useSelector } from "react-redux";


const loginContainer = () => {

  return (
    <Login
      // onSubmit={onSubmit}
    />
  );
};

export default React.memo(loginContainer);
