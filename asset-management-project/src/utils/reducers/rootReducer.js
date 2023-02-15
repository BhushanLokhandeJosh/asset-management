import { combineReducers } from "redux";

import AuthReducer from "./AuthReducer";
import UserReducer from "./UserReducer";
import AssetReducer from "./AssetReducer";
import RequestReducer from "./RequestReducer";
import UserAssetReducer from "./UserAssetReducer";
import VendorReducer from "./VendorReducer";
import ErrorReducer from "./ErrorReducer";

const rootReducer = combineReducers({
    AuthReducer,
    UserReducer,
    AssetReducer,
    RequestReducer,
    UserAssetReducer,
    VendorReducer,
    ErrorReducer

  
});

export default rootReducer;