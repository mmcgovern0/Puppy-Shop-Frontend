import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PetShowPage extends Component {

    // click = () => {
    //     fetch(`http://localhost:3001/pets/${this.props.location.state.pet.id}`,{
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Accept: 'application/json'
    //         }
    //     })
    //     .then(r => r.json)
    //     .then(petData => {
    //         console.log(petData)
    //     })
    // }

    render() {
        return (
            <div>
                <h2>{this.props.location.state.pet.name}</h2>
                Species:
                {this.props.location.state.pet.species}<br/>
                Breed:
                {this.props.location.state.pet.breed}<br/>
                Age:
                {this.props.location.state.pet.age} years<br/>
                Weight:
                {this.props.location.state.pet.weight} lbs.<br/>

                {/* <button onClick={this.click}>Delete {this.props.location.state.pet.name}</button> */}
                <Link to={{pathname: '/edit-pet', state: {pet: this.props.location.state.pet}}}>Edit {this.props.location.state.pet.name}</Link>
            </div>
        );
    }
}

export default PetShowPage;



