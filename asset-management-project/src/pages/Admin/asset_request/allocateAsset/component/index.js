import React from "react";
import { Form, Formik } from "formik";
import FormikControl from "../../../../Shared/FormikContainer/formikControl";
import { assetStatusMenu, assetsMenu } from "../../../../../data/constants";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../routes/constants";
import { allocateAssetStart } from "../../../../../utils/actions/userAssetAction";

const AllocateAsset = ({
  userId,
  userName,
  userEmail,
  assets,
  navigate,
  dispatch,
}) => {
  const allAssetsMenu = assetsMenu(assets);

  const initialValues = {
    asset_id: "",
    is_active: "",
    delivered_date: "",
    returned_date: "",
    user_id: userId,
    username: userName,
    useremail: userEmail,
  };

  const validationSchema = Yup.object({
    asset_id: Yup.number(),
    is_active: Yup.string().required("Please Enter Asset Allocated Status"),
    delivered_date: Yup.date().required("Delivered Date Required"),
    returned_date: Yup.date()
      .min(
        Yup.ref("delivered_date"),
        "Return date should be later than delivery date"
      )
      .required("Return date is required"),
    user_id: Yup.string().required("User Id is must"),
    username: Yup.string().required("User Name is must"),
    useremail: Yup.string().required("User Email is must"),
  });

  const onSubmit = (values) => {
    const assetData = {
      user_asset: values,
    };
    console.log(assetData);
    dispatch(allocateAssetStart(assetData, navigate));
  };

  return (
    <div>
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
                  type="number"
                  name="user_id"
                  hidden
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="input"
                  type="text"
                  label="UserName"
                  name="username"
                  disabled
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="input"
                  type="text"
                  label="User Email"
                  name="useremail"
                  disabled
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="select"
                  label="Choose Asset"
                  name="asset_id"
                  options={allAssetsMenu}
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="select"
                  label="Status"
                  name="is_active"
                  options={assetStatusMenu}
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="date"
                  label="Delivary Date"
                  name="delivered_date"
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="date"
                  label="Return Date"
                  name="returned_date"
                />
              </div>

              <div className="button-submit">
                <button
                  type="submit"
                  className="btn btn-danger"
                  //   disabled={!formikProps.isValid || formikProps.isSubmitting}
                >
                  Submit
                </button>
              </div>
              <div className="button-back">
                <Link to={ROUTES.GETALLREQUEST}>
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

export default AllocateAsset;
