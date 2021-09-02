import { combineReducers } from "redux";
import {productReducer,selectProductDetailReducer,sampleProductReducer} from "./productReducer";

const reducers= combineReducers({
    allproducts:productReducer,
    product:selectProductDetailReducer,
    sampleproducts:sampleProductReducer
})
export default reducers;