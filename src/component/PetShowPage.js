import React, { Component } from 'react';

class PetShowPage extends Component {

    click = () => {
        console.log("edit puppers")
    }

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

                <button onClick={this.click}>Edit {this.props.location.state.pet.name}</button>
            </div>
        );
    }
}

export default PetShowPage;