import { DELETE_CITY } from "../constants/cityConstants";

export const deleteCity = (id) => {

    return {
        type: DELETE_CITY,
        id: id
    }

};