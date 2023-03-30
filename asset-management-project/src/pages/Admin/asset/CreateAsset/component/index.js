import React from "react";
import { Form, Formik } from "formik";
import FormikControl from "../../../../Shared/FormikContainer/formikControl";
import { Link, Routes, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { createAssetStart } from "../../../../../utils/actions/assetActions";
import { ROUTES } from "../../../../../routes/constants";
import {
  categoryMenu,
  ramMenu,
  statusMenu,
} from "../../../../../data/constants";

const CreateAsset = ({ getAllFormValues }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    description: "",
    category: "",
    model_no: "",
    ram: "",
    os: "",
    storage: "",
    processor: "",
    supplier_name: "",
    date_of_purchase: "",
    price: "",
    status: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Brand Name Required..."),
    description: Yup.string().notRequired(),
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
  });

  const onSubmit = (values) => {
    const asset = getAllFormValues(values);
    console.log(asset);
    const formValues = {
      asset,
    };

    dispatch(createAssetStart(formValues, navigate));
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
                />
              </div>
              {formikProps.values.category === "Laptop" && (
                <>
                  <div className="form-group">
                    <FormikControl
                      control="select"
                      options={ramMenu}
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
                <button
                  type="submit"
                  className="btn btn-danger"
                >
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

export default CreateAsset;
