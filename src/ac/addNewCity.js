import { ADD_CITY } from "../constants/cityConstants";
import { ERROR } from "../constants/cityConstants";
import { ERROR_FALSE } from "../constants/cityConstants";

export const addNewCity = (name) => dispatch => {

     fetch('http://api.openweathermap.org/data/2.5/weather?q=' + name +'&appid=8e3145fe3bc2e2e42c29a6c323b46d41&units=metric')
         .then((response) => response.json())
         .then((response) =>
         {
             dispatch({
                 type: ADD_CITY,
                 payload: {name: response.name, temp: response.main.temp, id: response.id}
             });

             dispatch({ type: ERROR_FALSE });

         }).catch(function(){
             dispatch({type: ERROR})
         })
 };