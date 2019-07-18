import React, { Component } from 'react';

class PetComponent extends Component {
    render() {
        return (
            <div>
                {this.props.pet.name}
                {this.props.pet.species}
                {this.props.pet.breed}
                {this.props.pet.age}
                {this.props.pet.weight}

            </div>
        );
    }
}

export default PetComponent;