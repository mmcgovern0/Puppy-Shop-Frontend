import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PetShowPage from './PetShowPage'

class PetComponent extends Component {

    click = () => {
        console.log("yerr")
        return <PetShowPage />
    }

    render() {
        return (
            <div>
                {/* <p onClick={this.click}>{this.props.pet.name}</p>
                <Link to="/pet">{this.props.pet.name}</Link> */}
                <Link to={{pathname: '/pet', state: {pet: this.props.pet}}}>{this.props.pet.name}</Link>
            </div>
        );
    }
}

export default PetComponent;