import { ADD_CITY } from "../constants/cityConstants";
import { DELETE_CITY } from "../constants/cityConstants";


export const addCity = (stateCity = [], action) => {

    console.log(action);

        if (action.type === ADD_CITY) stateCity = [...stateCity, action.payload];

        if (action.type === DELETE_CITY) stateCity = stateCity.filter(city => city.id !== action.id);

        return stateCity;

};