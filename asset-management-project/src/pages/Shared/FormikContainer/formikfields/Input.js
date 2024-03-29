import { Field, ErrorMessage } from "formik";
import FormError from "./FormError";
import { ReactElement } from "react";


const Input = (props) => {
  const { label, name, ...other } = props;
  return (
    <div>
      <label
        htmlFor={name}
        style={{ fontSize: "25px", fontWeight: "bold" }}
      >
        {label}
      </label>
      <Field id={name} name={name} {...other} className="form-control" />
      <ErrorMessage
        name={name}
        component={FormError}
      />
    </div>
  );
};

export default Input;
