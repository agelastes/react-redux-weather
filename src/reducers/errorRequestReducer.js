import { ERROR } from "../constants/cityConstants";
import { ERROR_FALSE } from "../constants/cityConstants";

export const errorRequestReducer = (errorState = false, action) => {
    if (action.type === ERROR)
    {
        errorState = true;
        console.log(errorState);
    }

    if (action.type === ERROR_FALSE)
    {
        errorState = false;
        console.log(errorState);
    }

    return errorState;

};