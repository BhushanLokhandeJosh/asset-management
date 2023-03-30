import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutStart } from "../../../../utils/actions/authActions";

const UnAuthorize = ({ goBack }) => {
  

  return (
    <section>
      <h1>Unauthorized</h1>
      <br />
      <p>You do not have access to the requested page.</p>
      <div className="flexGrow">
        <button onClick={goBack}>Go Back</button>
      </div>
    </section>
  );
};

export default UnAuthorize;
