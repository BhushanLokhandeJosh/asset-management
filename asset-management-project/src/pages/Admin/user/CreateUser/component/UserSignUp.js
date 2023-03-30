import React from "react";
import * as Yup from "yup";

import { Form, Formik } from "formik";
import FormikControl from "../../../../Shared/FormikContainer/formikControl"

import { useDispatch } from "react-redux";
import {registrationStart} from "../../../../../utils/actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../../routes/constants";
import { createUserStart } from "../../../../../utils/actions/userAction";

const UserSignup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
    confirmpassword: "",
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
    confirmpassword: Yup.string()
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        ),
      })
      .required("This Field is mandatory"),
  });

  const onSubmit = (values) => {
    console.log("In Handle Form");
    const data = {
      email: values.email,
      password: values.password,
    };

    const loggedUserDetails = {
      user: data,
    };

    dispatch(createUserStart(loggedUserDetails,navigate));
  };
  return (
    <>
      <div className="form">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formikProps) => {
            return (
              <>
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

                  <div className="form-group">
                    <FormikControl
                      control="input"
                      type="password"
                      label="Confirm Password"
                      name="confirmpassword"
                    />
                  </div>

                  <div className="button-submit">
                    <button
                      type="submit"
                      className="btn btn-danger"
                    >
                      Submit
                    </button>
                  </div>

                  <div className="button-submit">
                    <Link to={ROUTES.DASHBOARD}>
                      <button className="btn btn-primary">Back</button>
                    </Link>
                  </div>
                </Form>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default UserSignup;
