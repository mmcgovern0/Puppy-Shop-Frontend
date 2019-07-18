import React, { Component } from 'react';
import PetComponent from '../component/PetComponent'

class PetsContainer extends Component {

    render() {
        const pet = this.props.pets.map(pet => {
            return <PetComponent key={pet.id} pet={pet} />
        })
        
        return (
            <div>
                {pet}
            </div>
        );
    }
}

export default PetsContainer;