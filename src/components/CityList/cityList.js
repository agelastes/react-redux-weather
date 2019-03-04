import { connect } from "react-redux";
import React, { Component } from 'react';
import City from '../City/City';
import Error from '../Error/Error';


class CityList extends Component {


    render() {


        const cityList = this.props.dataCity.map((data) => <City city = {data} key = {data.id} />);


        return (

            <div>
                <div>{cityList}</div>
                <Error />
            </div>

        );

    }

}

const mapStateToProps = (state) => ({
    dataCity: state.city
});

export default connect(mapStateToProps)(CityList);
