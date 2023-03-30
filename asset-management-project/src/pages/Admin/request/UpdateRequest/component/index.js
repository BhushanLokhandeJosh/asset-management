import React from "react";
import { useSelector } from "react-redux";

import { Form, Formik } from "formik";
import FormikControl from "../../../../Shared/FormikContainer/formikControl";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import * as Yup from "yup";

import {
  categoryMenu,
  ramMenu,
  requestMenu,
  storageMenu,
} from "../../../../../data/constants";
import { ROUTES } from "../../../../../routes/constants";
import { updateRequestStart } from "../../../../../utils/actions/requestActions";

const UpdateRequest = ({ dispatch, requestId, updateRequest, navigate }) => {

  let initialValues = {};

  if (updateRequest && updateRequest.category !== "Laptop") {
    initialValues = {
      id: updateRequest?.id,
      subject: updateRequest?.subject,
      description: updateRequest?.description,
      category: updateRequest?.category,
      request_status: updateRequest?.request_status,
    };
  } else {
    initialValues = {
      id: updateRequest?.id,
      subject: updateRequest?.subject,
      description: updateRequest?.description,
      category: updateRequest.category,
      ram: updateRequest.ram,
      os: updateRequest.os,
      storage: updateRequest.storage,
      processor: updateRequest.processor,
      request_status: updateRequest.request_status,
    };
  }

  const validationSchema = Yup.object({
    id: Yup.number(),
    description: Yup.string().required("Description Required..."),
    subject: Yup.string().required("Subject required"),
    category: Yup.string().required("Cateogory required"),

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

    request_status: Yup.string().required("Request_status is Must"),
  });

  const onSubmit = (values) => {
    console.log(values);
    const formData = {
      request: values,
    };

    dispatch(updateRequestStart(formData, requestId, navigate));
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
                  name="id"
                  hidden
                />
              </div>

              <div className="form-group">
                <FormikControl
                  control="input"
                  type="textarea"
                  label="Subject"
                  name="subject"
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
                      control="select"
                      options={storageMenu}
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
                  control="select"
                  label="Status"
                  name="request_status"
                  options={requestMenu}
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

export default UpdateRequest;
