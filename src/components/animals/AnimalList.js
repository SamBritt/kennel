import React, { Component } from 'react'
import Kennel from "../Kennel"

export default class AnimalList extends Component {
    render() {
        return (
            <article className = "wrapper">
                <h1>Animal List</h1>
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id}>
                            {animal.name}
                        </div>
                    )
                }
            </article>
        );
    }
}