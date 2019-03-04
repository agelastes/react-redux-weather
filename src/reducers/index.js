import { combineReducers } from "redux";
import { addCity } from "./addCity";
import { errorRequestReducer } from "./errorRequestReducer";

export default combineReducers({
    city: addCity,
    error: errorRequestReducer
})