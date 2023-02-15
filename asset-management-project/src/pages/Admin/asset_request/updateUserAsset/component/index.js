import React from "react";
import { Form, Formik } from "formik";
import FormikControl from "../../../../Shared/FormikContainer/formikControl";
import * as Yup from "yup";
import { assetStatusMenu, statusMenu } from "../../../../../data/constants";
import { Button } from "react-bootstrap";
import { ROUTES } from "../../../../../routes/constants";
import { Link } from "react-router-dom";
import { updateUserAssetStart } from "../../../../../utils/actions/userAssetAction";

const UpdateUserAsset = ({
  updateUserAsset,
  loading,
  UpdateObjectValues,
  navigate,
  dispatch,
}) => {

  let initialValues = {
    name: updateUserAsset.user.name || updateUserAsset.user.email,
    category: updateUserAsset.asset.category,
    model_no: updateUserAsset.asset.model_no,
    delivered_date: updateUserAsset.delivered_date,
    return_date: updateUserAsset.return_date,
    status: updateUserAsset.is_active,
  };

  const validationSchema = Yup.object({
    name: Yup.string(),
    category: Yup.string(),
    model_no: Yup.string(),
    delivered_date: Yup.date(),
    return_date: Yup.date()
      .min(
        Yup.ref("delivered_date"),
        "Return date should be later than delivery date"
      )
      .required("Return date is required"),
    status: Yup.string().required("Status required"),
  });

  const onSubmit = (values) => {
    const updatedData = UpdateObjectValues(updateUserAsset, values);
    const userAssetData = {
      user_asset: updatedData,
    };
    const userAssetId = updateUserAsset.id;

    console.log(userAssetData, updateUserAsset.id);
    dispatch(updateUserAssetStart(userAssetData, userAssetId, navigate));
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
                  type="text"
                  label="Employee Name/email"
                  name="name"
                  disabled
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="input"
                  type="text"
                  label="Category"
                  name="category"
                  disabled
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="input"
                  type="text"
                  label="Model No"
                  name="model_no"
                  disabled
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="date"
                  label="Delivery Date"
                  name="delivered_date"
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="date"
                  label="Return Date"
                  name="return_date"
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="select"
                  label="Status"
                  name="status"
                  options={assetStatusMenu}
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
              <div className="button-back">
                <Link to={ROUTES.GETASSIGNEDASSETS}>
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

export default UpdateUserAsset;
