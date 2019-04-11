import React, { Component } from 'react'
import "./location.css"
import Kennel from '../Kennel';

export default class LocationList extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    {
                        this.props.locations.map(location =>
                            <div key={location.id}>
                                {location.name}
                                {location.address}
                            </div>
                        )
                    }
                </div>
            </React.Fragment>
        );
    }
}