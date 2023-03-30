import React from "react";
import { Form, Formik } from "formik";
import FormikControl from "../../../../Shared/FormikContainer/formikControl";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../routes/constants";
import { createVendorStart } from "../../../../../utils/actions/vendorActions";

const CreateVendor = ({ dispatch, navigate }) => {
  const initialValues = {
    company: "",
    vendor_name: "",
    email: "",
    mobile_no: "",
    address: "",
    city: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    company: Yup.string().required("Company Name Required..."),
    vendor_name: Yup.string().required("Name Required..."),
    email: Yup.string()
      .trim()
      .lowercase()
      .email("Invalid email format")
      .required("Required"),
    mobile_no: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "too short")
      .max(10, "too long"),
    address: Yup.string().required("Address Required..."),
    city: Yup.string().required("City Required..."),
  });

  const onSubmit = (values) => {
    console.log(values);
    const formData = {
      vendor: values,
    };

    dispatch(createVendorStart(formData, navigate));
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
                  label="Company"
                  name="company"
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="input"
                  type="text"
                  label="Vendor Name"
                  name="vendor_name"
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="input"
                  type="number"
                  label="Mobile No"
                  name="mobile_no"
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

              <div className="button-submit">
                <button
                  type="submit"
                  className="btn btn-danger"
                  // disabled={!formikProps.isValid || formikProps.isSubmitting}
                >
                  Submit
                </button>
              </div>
              <div className="button-back">
                <Link to={ROUTES.GETALLVENDORS}>
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

export default CreateVendor;
