import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

function updateValues(object, user) {
  let { name, mobile_no, gender, dob, address, city, pincode, country } =
    object;

  name = user.name;
  mobile_no = user.mobile_no;
  gender = user.gender;
  dob = user.dob;
  address = user.address;
  city = user.city;
  pincode = user.pincode;
  country = user.country;

  return object;
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_GETALL_USER:
    case types.LOAD_SINGLE_USER:
    case types.LOAD_CREATE_USER:
    case types.LOAD_UPDATE_USER:
    case types.LOAD_DELETE_USER:
      return { ...state, loading: true };

    case types.SUCCESS_GETALL_USER:
      return {
        ...state,
        loading: false,
        users: [...action.payload],
      };

    case types.SUCCESS_SINGLE_USER:
      return { ...state, loading: false,users:[action.payload] };

    case types.SUCCESS_CREATE_USER:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload],
      };

    case types.SUCCESS_UPDATE_USER:
     
      let object = state.users.find(
        (item) => item.id === parseInt(action.payload.userId)
      );
      let user = action.payload.user;
      let UpdatedUser = updateValues(object, user);
      let filteredObjects = state.users.filter(
        (item) => item.id !== parseInt(action.payload.userId)
      );

      return {
        ...state,
        loading: false,
        users: [...filteredObjects, UpdatedUser]
    }

    case types.LOAD_UPDATE_USERPROFILE:
      return {
        ...state,loading:false,
        loggedInUser:action.payload.user
      }
    case types.SUCCESS_DELETE_USER:
      const filteredUser = state.users.filter((item) => {
        return item.id === parseInt(action.payload)
          ? (item.status = "inactive")
          : item;
      });

      console.log(filteredUser);

      return {
        ...state,
        loading: false,
        users: [...filteredUser],
      };
    default:
      return state;
  }
};

export default UserReducer;
