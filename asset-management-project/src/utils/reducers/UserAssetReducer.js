import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

const UserAssetReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.LOAD_ALLOCATE_ASSET:
    case types.LOAD_GETASSIGNED_ASSETS:
    case types.LOAD_UPDATEUSER_ASSET:
    case types.LOAD_GETUSER_ASSET:
      return {
        ...state,
        loading: true,
      };

    case types.SUCCESS_ALLOCATE_ASSET:
      return {
        ...state,
        loading: false,
      };
    case types.SUCCESS_GETASSIGNED_ASSETS:
      return {
        ...state,
        loading: false,
        userAsset: [...action.payload],
      };
    case types.SUCCESS_UPDATEUSER_ASSET:
      const filteredUserAsset = state.userAsset.filter(
        (item) => item.id !== parseInt(action.payload.userId)
      );
      console.log(filteredUserAsset);
      const updatedUserAsset = action.payload.userasset;

      return {
        ...state,
        loading: false,
        userAsset: [...filteredUserAsset, updatedUserAsset],
      };

    case types.SUCCESS_GETUSER_ASSET:
      
      return {
        ...state,
        loading:false,
        assignedAsset:[...action.payload]
      }

    

    default:
      return state;
  }
};

export default UserAssetReducer;
