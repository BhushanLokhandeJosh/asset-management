import React from "react";
import DashBoardContainer from "../../../Home/Dashboard";
import CreateAsset from "./component";

const CreateAssetContainer = () => {

  const getAllFormValues = (object) => {
    if (object.category !== "Laptop") {
      return {
        name: object.name,
        description: object?.description,
        category: object.category,
        model_no: object.model_no,
        supplier_name: object.supplier_name,
        date_of_purchase: object.date_of_purchase,
        price: object.price,
        status: object.status,
      };
    } else {
      return {
        name: object.name,
        description: object?.description,
        category: object.category,
        model_no: object.model_no,
        ram: object.ram,
        os: object.os,
        storage: object.storage,
        processor: object.processor,
        supplier_name: object.supplier_name,
        date_of_purchase: object.date_of_purchase,
        price: object.price,
        status: object.status,
      };
    }
  };

  return (
    <div>
      <DashBoardContainer />
      <CreateAsset
        getAllFormValues={getAllFormValues}
      />
    </div>
  );
};

export default CreateAssetContainer;
