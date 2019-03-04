import React, { Component } from 'react';
import { addNewCity } from "../../ac/addNewCity";
import { connect } from "react-redux";
import './App.css';
import CityList from "../CityList/cityList"

class App extends Component {

    state = {
      name: ""
    };

    editName = (e) => {
        this.setState({name: e.target.value});
    };

  render() {

    return (
      <div className="App">
        <input onChange={this.editName} />
        <button onClick={() => this.props.getCity(this.state.name)}>add</button>
        <CityList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    dataCity: state.city
});

const mapDispatchToProps = (dispatch) => ({
    getCity: (name) => dispatch(addNewCity(name))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
