import IMAGES from "../assets/image/errorImage";

export const categoryMenu = [
  { key: "Cateogary", value: "" },
  { key: "Laptop", value: "Laptop" },
  { key: "HeadPhone", value: "HeadPhone" },
  { key: "Mouse", value: "Mouse" },
  { key: "KeyBoard", value: "KeyBoard" },
  { key: "Hard Disk", value: "HardDisk" },
];

export const statusMenu = [
  { key: "Status", value: "" },
  { key: "Available", value: "available" },
  { key: "Not Available", value: "unavailable" },
];

export const ramMenu = [
  { key: "Ram", value: "" },
  { key: "4 GB", value: 4 },
  { key: "8 GB", value: 8 },
  { key: "16 GB", value: 16 },
  { key: "64 GB", value: 64 },
];

export const requestMenu = [
  { key: "Request status", value: "" },
  { key: "Pending", value: "pending" },
  { key: "Approved", value: "approve" },
  { key: "Rejected", value: "reject" },
];

export const storageMenu = [
  { key: "Storage", value: "" },
  { key: "8 GB", value: 8 },
  { key: "16 GB", value: 16 },
  { key: "64 GB", value: 64 },
  { key: "128 GB", value: 128 },
  { key: "256 GB", value: 256 },
];

//to know is asset is allocated or not...
export const assetStatusMenu = [
    {key:"Choose",value:""},
    { key:"Active",value:"active"},
    { key:"InActive",value:"inactive"}
  ]


  export const assetsMenu = (assets) => {
    const allAssets = [];
    assets.map((item)=>{
      const obj = {key:item.name+" "+item.category,value:item.id}
      allAssets.push(obj);
    })
    return allAssets;
  }

  
  export const genderMenu = [
    { key: "Gender", value: "" },
    { key: "Male", value: "Male" },
    { key: "Female", value: "Female" },
    { key: "Other", value: "Other" },
  ];

  export const systemUsers = {
    ADMIN:"admin",
    EMPLOYEE:"employee"
  }

  export const ErrorMessage = {
  400: {
    errorNumber: "400",
    errorDescription: "Something wrong with credentials!🤔",
    errorBody: "Missing Username and Password",
    errorImg: IMAGES.Error500,
  },
  401: {
    errorNumber: "401",
    errorDescription: "You are not authorized! 🔐",
    errorBody: "You don't have permission to access this page. Go Home!",
    errorImg: IMAGES.Error401,
  },
  404: {
    errorNumber: "404",
    errorDescription: "Page Not Found ⚠️",
    errorBody: "We couldn't find the page you are looking for.",
    errorImg: IMAGES.Error404,
  },
  422: {
    errorNumber: "422",
    errorDescription: "Please input valid credential⚠️",
    errorBody: "For reference  use placeholder text format.",
    errorImg: IMAGES.Error404,
  },
  500: {
    errorNumber: "500",
    errorDescription: "Internal server error 👨🏻‍💻",
    errorBody: "Oops, something went wrong!",
    errorImg: IMAGES.Error500,
  },
};