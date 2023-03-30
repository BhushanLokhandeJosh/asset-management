import { ErrorMessage, Field } from "formik";
import DateView from "react-datepicker";

import FormError from "./FormError";


const DatePicker = (props) => {
  const { label, name, ...other } = props;

  return (
    <div>
      <label
        htmlFor={name}
        style={{ fontSize: "25px", fontWeight: "bold" }}
      >
        {label}
      </label>
      <Field type="date" name={name} className="form-control">
      </Field>
      <ErrorMessage name={name} ErrorMessage={<FormError />} />
    </div>
  );
};

export default DatePicker;
