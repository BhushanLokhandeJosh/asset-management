import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../routes/constants";
import { Button } from "react-bootstrap";
import IMAGES from "../../../../assets/image/errorImage.js";
import "../error.css";

const ErrorPage = ({ error }) => {
  // const navigate = useNavigate();
  // const goBack = () => navigate(-1);
  console.log("In Error Page", error);

  const onError = (error) => {
    if (error?.includes(400)) {
      return {
        errorNumber: "400",
        errorDescription: "Something wrong with credentials!🤔",
        errorBody: "Missing Username and Password",
        errorImg: IMAGES.Error500,
      };
    } else if (error?.includes(401)) {
      return {
        errorNumber: "401",
        errorDescription: "You are not authorized! 🔐",
        errorBody: "You don't have permission to access this page. Go Home!",
        errorImg: IMAGES.Error401,
      };
    } else if (error?.includes(404)) {
      return {
        errorNumber: "404",
        errorDescription: "Page Not Found ⚠️",
        errorBody: "We couldn't find the page you are looking for.",
        errorImg: IMAGES.Error404,
      };
    } else if (error?.includes(422)) {
      return {
        errorNumber: "422",
        errorDescription: "Please input valid credential⚠️",
        errorBody: "For reference  use placeholder text format.",
        errorImg: IMAGES.Error404,
      };
    } else if (error?.includes(500)) {
      return {
        errorNumber: "500",
        errorDescription: "Internal server error 👨🏻‍💻",
        errorBody: "Oops, something went wrong!",
        errorImg: IMAGES.Error500,
      };
    }
  };

  const errorMessage = onError(error);
  console.log(errorMessage);

  return (
    <div className="error-style">
      {errorMessage ? (
        <div>
          <h2>{error}</h2>
          <h3>{errorMessage.errorDescription}</h3>
          <h3>{errorMessage.errorBody}</h3>
          <img src={errorMessage.errorImg} alt="cant load image" />
        </div>
      ) : (
        <h2>{error}</h2>
      )}

      <Link to={ROUTES.LOGIN} className="btn">
        <Button>Go Back</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
