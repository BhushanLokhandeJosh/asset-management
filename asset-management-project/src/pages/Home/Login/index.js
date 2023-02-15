
import Login from "./component";
import { useSelector } from "react-redux";
import NavbarComponent from "../../Shared/Navbar/NavbarComponent";

const loginContainer = () => {
  return (
    <>
      <NavbarComponent />
      <Login />
    </>
  );
};

export default React.memo(loginContainer);

