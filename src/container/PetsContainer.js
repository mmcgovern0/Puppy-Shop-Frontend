import React, { Component } from 'react';
import PetComponent from '../component/PetComponent'

class PetsContainer extends Component {

    render() {
        const pet = this.props.pets.map(pet => {
            return <PetComponent key={pet.id} pet={pet} user={this.props.user} />
        })
        
        return (
            <div>
                <h2>{this.props.user.username}'s Pets</h2>
                {pet}
            </div>
        );
    }
}

export default PetsContainer;