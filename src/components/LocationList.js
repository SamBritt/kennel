import React, { Component } from 'react'
import "./location.css"

export default class LocationList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="locationWrapper">
                    <div className="locationCard">
                        <h4>Nashville North Location</h4>
                        <h5>3342 Dogs Pk.</h5>
                    </div>
                    <div className="locationCard">
                        <h4>Nashville South Location</h4>
                        <h5>800 Cats Way</h5>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}