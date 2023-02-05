import React, { InputHTMLAttributes, ReactElement } from "react";
import Input from "./formikfields/Input";
import TextArea from "./formikfields/TextArea";
import DatePicker from "./formikfields/DatePicker";
import Select from "./formikfields/Select";

const FormikControl = (props) => {
  const { control, ...other } = props;
  switch (control) {
    case "input":
      return <Input {...other} />;
    case "textarea":
      return <TextArea {...other} />;
    case "date":
      return <DatePicker {...other} />;
    case "select":
      return <Select {...other} />;
    case "button":
      return <div></div>
    default:
      return <div>Not A Proper Control</div>;
  }
};

export default FormikControl;
