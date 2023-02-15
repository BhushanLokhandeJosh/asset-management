import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { Form, Formik } from "formik";
import FormikControl from "../../../Shared/FormikContainer/formikControl";

import "../login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginStart } from "../../../../utils/actions/authActions";
import { ROUTES } from "../../../../routes/constants";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .lowercase()
      .email("Invalid email format")
      .required("Required"),
    password: Yup.string()
      .trim()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Minimum eight characters, at least one letter, one number and one special character"
      )
      .required("Required"),
  });

  const onSubmit = (values) => {
    console.log("In Handle Form");
    const data = {
      email:values.email,
      password:values.password
    }

    const loggedUserDetails = {
      "user":data
    }
    
    dispatch(loginStart(loggedUserDetails,navigate));

    // navigate("/dashboard");
  };

  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formikProps) => {
          return (
            <Form>
              <div className="form-group">
                <FormikControl
                  control="input"
                  type="text"
                  label="Email"
                  name="email"
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="input"
                  type="password"
                  label="Password"
                  name="password"
                />
              </div>

              <div className="button-submit">
                <button
                  type="submit"
                  className="btn btn-danger"
                  disabled={!formikProps.isValid || formikProps.isSubmitting}
                >
                  Submit
                </button>
              </div>

              <div className="button-submit">
                
                  <Link to="/">
                    <button className="btn btn-primary">
                      Back
                    </button>

                  </Link>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default React.memo(Login);
