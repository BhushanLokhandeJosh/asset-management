import React from "react";

import { Form, Formik } from "formik";
import FormikControl from "../../../../Shared/FormikContainer/formikControl";

import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { categoryMenu, ramMenu, statusMenu } from "../../../../../data/constants";
import { updateAssetStart } from "../../../../../utils/actions/assetActions";
import { ROUTES } from "../../../../../routes/constants";

const UpdateAsset = ({
  dispatch,
  id,
  getUpdatedFormValues,
  navigate,
}) => {
  const { assets } = useSelector((state) => state.AssetReducer);

  const updateAsset = assets.find((item) => item.id === parseInt(id));

  let initialValues = {};

  if (updateAsset && updateAsset.category !== "Laptop") {
      initialValues = {
      name: updateAsset.name,
      description: updateAsset.description,
      category: updateAsset.category,
      model_no: updateAsset.model_no,
      supplier_name: updateAsset.supplier_name,
      date_of_purchase: updateAsset.date_of_purchase,
      price: updateAsset.price,
      status: updateAsset.status,
    };
  } else {
    initialValues = {
      name: updateAsset.name,
      description: updateAsset.description,
      category: updateAsset.category,
      model_no: updateAsset.model_no,
      ram: updateAsset.ram,
      os: updateAsset.os,
      storage: updateAsset.storage,
      processor: updateAsset.processor,
      supplier_name: updateAsset.supplier_name,
      date_of_purchase: updateAsset.date_of_purchase,
      price: updateAsset.price,
      status: updateAsset.status,
    };
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Brand Name Required..."),
    description: Yup.string().nullable(),
    category: Yup.string().required("Cateogory required"),
    model_no: Yup.string().required("Model Number is must"),

    ram: Yup.number().when("category", {
      is: (category) => category === "Laptop",
      then: Yup.number().required("Ram Required"),
    }),
    os: Yup.string().when("category", {
      is: (category) => category === "Laptop",
      then: Yup.string().required("Os required"),
    }),
    storage: Yup.number().when("category", {
      is: (category) => category === "Laptop",
      then: Yup.number().required("Storage Required"),
    }),
    processor: Yup.string().when("category", {
      is: (category) => category === "Laptop",
      then: Yup.string().required("Processor required"),
    }),

    supplier_name: Yup.string().required("Supplier Name Must"),
    date_of_purchase: Yup.date().required("Date Required..."),
    price: Yup.number().required("Price Required"),
    status: Yup.string().required("Status Required"),
  })

  const onSubmit = (values) => {
    console.log("In form");
    const asset = getUpdatedFormValues(values);
    console.log(asset);
    const formValues = {
      asset,
    };
    dispatch(updateAssetStart(formValues, id, navigate));
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
                  label="Brand Name"
                  name="name"
                />
              </div>
              <div className="form-group">
                <FormikControl
                  control="input"
                  type="textarea"
                  label="Description"
                  name="description"
                />
              </div>
              <div className="form-group">
                <FormikControl
                  control="select"
                  label="Category"
                  name="category"
                  options={categoryMenu}
                  // disabled
                />
              </div>
              {formikProps.values.category === "Laptop" && (
                <>
                  <div className="form-group">
                    <FormikControl
                      options={ramMenu}
                      control="select"
                      placeholder="In GB"
                      label="Ram"
                      name="ram"
                    />

                  </div>

                  <div className="form-group">
                    <FormikControl
                      control="input"
                      type="text"
                      placeholder="Like windows,linux,ios"
                      label="Os"
                      name="os"
                    />
                  </div>

                  <div className="form-group">
                    <FormikControl
                      control="input"
                      type="number"
                      placeholder="In GB"
                      label="Storage"
                      name="storage"
                    />
                  </div>

                  <div className="form-group">
                    <FormikControl
                      control="input"
                      type="text"
                      placeholder="like intel,AMD,celeron"
                      label="Processor"
                      name="processor"
                    />
                  </div>
                </>
              )}

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
                  control="input"
                  type="text"
                  label="Supplier Name"
                  name="supplier_name"
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="date"
                  label="Date Of Purchase"
                  name="date_of_purchase"
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="input"
                  type="number"
                  label="Price"
                  name="price"
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="select"
                  label="Status"
                  name="status"
                  options={statusMenu}
                />
              </div>

              <div className="button-submit">
                <button type="submit" className="btn btn-danger">
                  Submit
                </button>
              </div>
              <div className="button-back">
                <Link to={ROUTES.GETALLASSET}>
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

export default UpdateAsset;
