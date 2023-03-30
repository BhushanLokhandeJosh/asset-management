import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
import UnAuthorizeContainer from "../pages/Home/UnAuthorize";
import Layout from "../pages/Shared/Layout";
import RequireAuth from "./RequireAuth";
import { systemUsers } from "../data/constants";

const publicRoutes = [
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
];

const basicRoutes = [
  {
    path: ROUTES.LOGIN,
    component: Login,
  },
  {
    path: ROUTES.UNAUTHORIZED,
    component: UnAuthorizeContainer,
  },
  {
    path: ROUTES.ERROR,
    component: ErrorContainer,
  },
  {
    path: ROUTES.DASHBOARD,
    component: DashBoardContainer,
  },
];

const userRoutes = [
  {
    path: ROUTES.GETALLUSER,
    component: GetAllUser,
  },
  {
    path: ROUTES.CREATEUSER,
    component: CreateUser,
  },
];

const assetRoutes = [
  {
    path: ROUTES.GETALLASSET,
    component: GetAllAssetContainer,
  },
  {
    path: ROUTES.CREATEASSET,
    component: CreateAssetContainer,
  },
];

const vendorRoutes = [
  {
    path: ROUTES.GETALLVENDORS,
    component: GetAllVendorsContainer,
  },
  {
    path: ROUTES.CREATEVENDOR,
    component: CreateVendorContainer,
  },
];

const RoutesComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    checkAutoLogin(dispatch,navigate);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {publicRoutes.map((route, index) => (
          <Route path={route.path} key={index} element={<route.component />} />
        ))}

        {basicRoutes.map((route, index) => (
          <Route path={route.path} key={index} element={<route.component />} />
        ))}

        {/* User Routes... */}
        <Route element={<RequireAuth allowedRoles={[systemUsers.ADMIN]} />}>
          {userRoutes.map((route, index) => (
            <Route
              path={route.path}
              key={index}
              element={<route.component />}
            />
          ))}
          <Route
            path={`${ROUTES.UPDATEUSER}/:id/:status`}
            element={<UpdateUser />}
          />
          <Route path={`${ROUTES.DELETEUSER}/:id`} element={<ChangeStatus />} />
          <Route path={`${ROUTES.VIEWUSER}/:id`} element={<ViewUser />} />

          {/* Asset Routes... */}
          {assetRoutes.map((route, index) => (
            <Route
              path={route.path}
              key={index}
              element={<route.component />}
            />
          ))}

          <Route
            path={`${ROUTES.UPDATEASSET}/:id`}
            element={<UpdateAssetContainer />}
          />
          <Route
            path={`${ROUTES.DELETEASSET}/:id`}
            element={<DeleteAssetContainer />}
          />

          {/* Request Routes... */}
          <Route
            path={ROUTES.GETALLREQUEST}
            element={<GetAllRequestContainer />}
          />

          <Route
            path={`${ROUTES.UPDATEREQUEST}/:id`}
            element={<UpdateRequestContainer />}
          />
          <Route
            path={`${ROUTES.VIEWREQUEST}/:id`}
            element={<ViewRequestContainer />}
          />

          {/* Asset_Request Routes... */}
          <Route
            path={ROUTES.GETASSIGNEDASSETS}
            element={<GetAssignedAssetsContainer />}
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

          {/* Vendor routes */}

          {vendorRoutes.map((route, index) => (
            <Route
              path={route.path}
              key={index}
              element={<route.component />}
            />
          ))}

          <Route
            path={`${ROUTES.DELETEVENDOR}/:id`}
            element={<DeleteVendorContainer />}
          />
          <Route
            path={`${ROUTES.UPDATEVENDOR}/:id`}
            element={<UpdateVendorContainer />}
          />
        </Route>

        <Route element={<RequireAuth allowedRoles={[systemUsers.EMPLOYEE]} />}>
          {/* Employee */}
          <Route
            path={`${ROUTES.UPDATEUSERPROFILE}/:id`}
            element={<UpdateUserProfileContainer />}
          />

          {/* Employee */}
          <Route
            path={`${ROUTES.CHECKUSERASSETSTATUS}/:id`}
            element={<CheckAssetStatusContainer />}
          />
        </Route>

        <Route
          element={
            <RequireAuth
              allowedRoles={[systemUsers.ADMIN, systemUsers.EMPLOYEE]}
            />
          }
        >
          {/* Employee and admin... */}
          <Route
            path={`${ROUTES.VIEWASSET}/:id`}
            element={<ViewAssetContainer />}
          />

          {/* Employee and admin... */}
          <Route
            path={ROUTES.CREATEREQUEST}
            element={<CreateRequestContainer />}
          />

          {/* Employee and admin */}
          <Route path={ROUTES.LOGOUT} element={<Logout />} />
        </Route>

        <Route path="*" element={<Navigate to={ROUTES.ERROR} replace />} />
      </Route>
    </Routes>

    //
    // </Routes>
  );
};

export default RoutesComponent;
