import React from "react";
import { Form, Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import FormikControl from "../../../Shared/FormikContainer/formikControl";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { genderMenu } from "../../../../data/constants";

import { updateUserProfileStart } from "../../../../utils/actions/userAction";

import { ROUTES } from "../../../../routes/constants.js";

const UpdateUserProfile = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loggedInUser } = useSelector((state) => state.AuthReducer);

  console.log(loggedInUser);

  let initialValues = {
    name: loggedInUser.name,
    mobileNo: loggedInUser.mobile_no,
    gender: loggedInUser.gender,
    dateOfBirth: loggedInUser.dob,
    address: loggedInUser.address,
    city: loggedInUser.city,
    pincode: loggedInUser.pincode,
    country: loggedInUser.country,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name Required..."),
    mobileNo: Yup.string()
      .min(10, "Must of 10 digits")
      .required("Mobile Number Required"),
    gender: Yup.string().required("Choose Gender"),
    dateOfBirth: Yup.date().required("Date Required..."),
    address: Yup.string().required("Address Required"),
    city: Yup.string().required("City Required"),
    pincode: Yup.number().min(6).required("Pincode Required"),
    country: Yup.string().required("Country Required"),
  });

  const onSubmit = (values) => {
    let data = {
      name: values.name,
      mobile_no: values.mobileNo,
      gender: values.gender,
      dob: values.dateOfBirth,
      address: values.address,
      city: values.city,
      pincode: values.pincode,
      country: values.country,
    };

    let updatedData = {
      user: data,
    };

    console.log(updatedData);

    dispatch(updateUserProfileStart(updatedData, id, navigate));
  };
  return (
    <div className="form">
      <div className="create-form">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formikProps) => (
            <Form>
              <div className="form-group">
                <FormikControl
                  control="input"
                  type="text"
                  label="Name"
                  name="name"
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="input"
                  type="text"
                  label="Mobile No."
                  name="mobileNo"
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="select"
                  label="Gender"
                  name="gender"
                  options={genderMenu}
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="date"
                  label="Date Of Birth"
                  name="dateOfBirth"
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="input"
                  type="textarea"
                  label="Address"
                  name="address"
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="input"
                  type="text"
                  label="City"
                  name="city"
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="input"
                  type="number"
                  label="PinCode"
                  name="pincode"
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="input"
                  type="text"
                  label="Country"
                  name="country"
                />
              </div>

              <div className="button-submit">
                <button type="submit" className="btn btn-danger">
                  Submit
                </button>
              </div>

              <div className="button-back">
                <Link to={ROUTES.DASHBOARD}>
                  <Button variant="primary">Back</Button>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdateUserProfile;
