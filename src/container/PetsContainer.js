import React, { Component } from 'react';
import PetComponent from '../component/PetComponent'

class PetsContainer extends Component {

    addPet = () => {
        console.log("add pet")
        this.props.history.push('/new-pet')
    }

    render() {
        const pet = this.props.pets.map(pet => {
            return <PetComponent key={pet.id} pet={pet} user={this.props.user} />
        })
        
        return (
            <div>
                <div className="ui inverted vertical masthead center aligned segment">

                <div className="ui text container">
                <h1 className="ui inverted header">
                    {this.props.user.first_name}'s Pets
                </h1>
                <h2>Pets are humanizing. They remind us we have an obligation and responsibility to preserve and nurture and care for all life.</h2>
                <button className="ui small button" onClick={this.addPet}>Add Pet</button>
                </div>

                </div>

                {pet}
            </div>
        );
    }
}

export default PetsContainer;





