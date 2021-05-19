import { combineReducers } from "redux"
import dishReducer from "./dishReducer"
export default combineReducers({ dishes: dishReducer })