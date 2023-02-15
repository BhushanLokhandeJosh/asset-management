import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./constants";

import Hero from "../pages/Home/Hero/component/index";
import About from "../pages/Home/About/component/index";
import Contact from "../pages/Home/Contact/component/index";
import Login from "../pages/Home/Login/component/index";
import DashBoardContainer from "../pages/Home/Dashboard/index.js";
import Logout from "../pages/Home/Logout/component";
import CreateUser from "../pages/Admin/user/CreateUser/index.js";
import GetAllUser from "../pages/Admin/user/GetAllUser/index.js";
import { useDispatch } from "react-redux";
import UpdateUser from "../pages/Admin/user/Update/index.js";
import ChangeStatus from "../pages/Admin/user/Delete/index.js";
import ViewUser from "../pages/Admin/user/ViewUser/index.js";
import GetAllAssetContainer from "../pages/Admin/asset/GetAllAsset";
import UpdateAssetContainer from "../pages/Admin/asset/UpdateAsset";
import CreateAssetContainer from "../pages/Admin/asset/CreateAsset";
import DeleteAssetContainer from "../pages/Admin/asset/DeleteAsset";
import ViewAssetContainer from "../pages/Admin/asset/ViewAsset";
import CreateRequestContainer from "../pages/Admin/request/CreateRequest";
import GetAllRequestContainer from "../pages/Admin/request/GetallRequest";
import UpdateRequestContainer from "../pages/Admin/request/UpdateRequest";
import ViewRequestContainer from "../pages/Admin/request/ShowRequet";
import AllocateAssetContainer from "../pages/Admin/asset_request/allocateAsset";
import GetAssignedAssetsContainer from "../pages/Admin/asset_request/allAssignedAssets";
import UpdateUserAssetContainer from "../pages/Admin/asset_request/updateUserAsset";
import ViewAssignedAssetContainer from "../pages/Admin/asset_request/viewAssignedAsset";
import GetAllVendorsContainer from "../pages/Admin/vendor/getallVendors";
import CreateVendorContainer from "../pages/Admin/vendor/createVendors";
import DeleteVendorContainer from "../pages/Admin/vendor/deleteVendors";
import UpdateVendorContainer from "../pages/Admin/vendor/updateVendors";
import ErrorContainer from "../pages/Home/Error";
import { checkAutoLogin } from "../services/AuthUser";
import UpdateUserProfileContainer from "../pages/User/updateUser";
import CheckAssetStatusContainer from "../pages/User/checkAssetStatus";

export const routes = [
  {
    path: ROUTES.HOME,
    component: Hero,
  },
  {
    path: ROUTES.ABOUT,
    component: About,
  },
  {
    path: ROUTES.CONTACT,
    component: Contact,
  },
  {
    path: ROUTES.LOGIN,
    component: Login,
  },
  {
    path: ROUTES.LOGOUT,
    component: Logout,
  },
  {
    path: ROUTES.DASHBOARD,
    component: DashBoardContainer,
  },
  {
    path: ROUTES.GETALLUSER,
    component: GetAllUser,
  },
  {
    path: ROUTES.CREATEUSER,
    component: CreateUser,
  },
  {
    path: ROUTES.GETALLASSET,
    component: GetAllAssetContainer,
  },
  {
    path: ROUTES.CREATEASSET,
    component: CreateAssetContainer,
  },
  {
    path: ROUTES.GETALLREQUEST,
    component: GetAllRequestContainer,
  },
  {
    path: ROUTES.CREATEREQUEST,
    component: CreateRequestContainer,
  },
  {
    path: ROUTES.GETASSIGNEDASSETS,
    component: GetAssignedAssetsContainer,
  },
  {
    path: ROUTES.GETALLVENDORS,
    component: GetAllVendorsContainer,
  },
  {
    path: ROUTES.CREATEVENDOR,
    component: CreateVendorContainer,
  },
  {
    path: ROUTES.ERROR,
    component: ErrorContainer,
  },
];

const RoutesComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    checkAutoLogin(dispatch);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route path={route.path} key={index} element={<route.component />} />
        ))}
        <Route
          path={`${ROUTES.UPDATEUSER}/:id/:status`}
          element={<UpdateUser />}
        />
        <Route path={`${ROUTES.DELETEUSER}/:id`} element={<ChangeStatus />} />
        <Route path={`${ROUTES.VIEWUSER}/:id`} element={<ViewUser />} />
        <Route
          path={`${ROUTES.UPDATEASSET}/:id`}
          element={<UpdateAssetContainer />}
        />
        <Route
          path={`${ROUTES.DELETEASSET}/:id`}
          element={<DeleteAssetContainer />}
        />
        <Route
          path={`${ROUTES.VIEWASSET}/:id`}
          element={<ViewAssetContainer />}
        />
        <Route
          path={`${ROUTES.UPDATEREQUEST}/:id`}
          element={<UpdateRequestContainer />}
        />
        <Route
          path={`${ROUTES.VIEWREQUEST}/:id`}
          element={<ViewRequestContainer />}
        />
        <Route
          path={`${ROUTES.ALLOCATEASSET}/:id`}
          element={<AllocateAssetContainer />}
        />
        <Route
          path={`${ROUTES.UPDATEUSERASSET}/:id`}
          element={<UpdateUserAssetContainer />}
        />
        <Route
          path={`${ROUTES.VIEWUSERASSETS}/:id`}
          element={<ViewAssignedAssetContainer />}
        />
        <Route
          path={`${ROUTES.DELETEVENDOR}/:id`}
          element={<DeleteVendorContainer />}
        />
        <Route
          path={`${ROUTES.UPDATEVENDOR}/:id`}
          element={<UpdateVendorContainer />}
        />
        <Route
          path={`${ROUTES.UPDATEUSERPROFILE}/:id`}
          element={<UpdateUserProfileContainer />}
        />
        <Route
          path={`${ROUTES.CHECKUSERASSETSTATUS}/:id`}
          element={<CheckAssetStatusContainer />}
        />
        <Route path="*" element={<Navigate to={ROUTES.ERROR} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
