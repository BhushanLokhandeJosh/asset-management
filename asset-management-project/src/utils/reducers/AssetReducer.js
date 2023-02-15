import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

function updateValues(object, asset) {
  let {
    name,
    description,
    category,
    model_no,
    ram,
    os,
    storage,
    processor,
    supplier_name,
    date_of_purchase,
    price,
    status,
  } = object;

  name = asset?.name;
  description = asset?.description;
  category = asset?.category;
  model_no = asset?.model_no;
  ram = asset?.ram;
  os = asset?.os;
  storage = asset?.storage;
  processor = asset?.processor;
  supplier_name = asset?.supplier_name;
  date_of_purchase = asset?.date_of_purchase;
  price = asset?.price;
  status = asset?.status;

  return object;
}

const AssetReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.LOAD_CREATE_ASSET:
      return {
        ...state,
        loading: false,
        assets: [...state.assets, action.payload],
      };
    case types.LOAD_DELETE_ASSET:
    case types.LOAD_GETALL_ASSET:
    case types.LOAD_SINGLE_ASSET:
    case types.LOAD_UPDATE_ASSET:
      return { ...state, loading: true };

    case types.SUCCESS_UPDATE_ASSET:
      let object = state.assets.find(
        (item) => item.id === parseInt(action.payload.assetId)
      );
      let asset = action.payload.asset;
      console.log(updateValues(object, asset));

      let UpdatedAsset = updateValues(object, asset);
      let filteredAssets = state.assets.filter(
        (item) => item.id !== parseInt(action.payload.assetId)
      );

      return {
        ...state,
        loading: false,
        assets: [...filteredAssets, UpdatedAsset],
      };

    case types.SUCCESS_DELETE_ASSET:

      const filteredAsset = state.assets.filter((item) => {
        return item.id === parseInt(action.payload) ? item.status = "unavailable" : item
      })

      return{
        ...state,loading:false,assets:[...filteredAsset]
      }

    case types.SUCCESS_GETALL_ASSET:
      return { ...state, loading: false, assets: [...action.payload] };
      
    case types.SUCCESS_SINGLE_ASSET:
    case types.SUCCESS_CREATE_ASSET:
      return {...state,loading:false,assets:[state.assets,action.payload]}

    default:
      return state;
  }
};

export default AssetReducer;
