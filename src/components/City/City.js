import React, { Component } from 'react';
import { deleteCity } from "../../ac/deleteCity";
import {connect} from "react-redux";

class City extends Component{

    render () {

        const {city, deleteCity} = this.props;


        return (
            <div>
                <h3>{city.name}</h3>
                <h3>{city.temp}</h3>
                <button onClick={() => deleteCity(city.id)}>delete</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteCity: (id) => dispatch(deleteCity(id))
});


export default connect(null, mapDispatchToProps)(City);