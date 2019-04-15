import React, { Component } from 'react'
import './owners.css'

export default class OwnersList extends Component {
    render() {
        return (
            <article className="wrapper">
                <h1>Owners List</h1>
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id}>
                            {owner.name}
                        </div>
                    )
                }
            </article>
        )
    }
}