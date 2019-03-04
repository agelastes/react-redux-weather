import React, { Component } from 'react';
import { connect } from "react-redux";

class Error extends Component {

    render() {
        if (this.props.error)
        {
            return (
                <div>
                    <h2>Bad request</h2>
                </div>
            )
        }

        else return null;
    }

}

const mapStateToProps = (state) => ({
    error: state.error
});

export default connect(mapStateToProps)(Error);