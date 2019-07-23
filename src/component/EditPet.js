import React, { Component } from 'react';

class EditPet extends Component {

    state = {
        name: this.props.location.state.pet.name,
        species: this.props.location.state.pet.species,
        breed: this.props.location.state.pet.breed,
        age: this.props.location.state.pet.age,
        weight: this.props.location.state.pet.weight      
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let editPet = {
            name: this.state.name,
            species: this.state.species,
            breed: this.state.breed,
            age: this.state.age,
            weight: this.state.weight
        }
        fetch(`http://localhost:3001/pets/${this.props.location.state.pet.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'               
            },
            body: JSON.stringify(editPet)
        })
        .then(r => r.json())
        .then(petData => {
            this.props.history.push('/profile')
        })
        this.forceUpdate()
    }

    render() {
        console.log(this.props)
        return (
            <div className="signupForm">
                <div className="ui equal width form">
                <div className="fields">
                    <div className="field">
                    <label>Pet Name</label>
                    <input type="text" placeholder={this.props.location.state.pet.name} value={this.state.name} onChange={this.handleChange} name="name"/>
                    </div>
                </div>
                <div className="fields">
                    <div className="field">
                    <label>Pet Species</label>
                    <input type="text" placeholder={this.props.location.state.pet.species} value={this.state.species} onChange={this.handleChange} name="species"/>
                    </div>
                    <div className="field">
                    <label>Pet Breed</label>
                    <input type="text" placeholder={this.props.location.state.pet.breed} value={this.state.breed} onChange={this.handleChange} name="breed"/>
                    </div>
                </div>
                <div className="fields">
                    <div className="field">
                    <label>Pet Age</label>
                    <input type="number" pplaceholder={this.props.location.state.pet.age} value={this.state.age} onChange={this.handleChange} name="age"/>
                    </div>
                    <div className="field">
                    <label>Pet Weight</label>
                    <input type="number" placeholder={this.props.location.state.pet.weight} value={this.state.weight} onChange={this.handleChange} name="weight"/>
                    </div>
                </div>
                </div>
                <div className="ui submit button" onClick={this.handleSubmit}>Submit</div>
            </div>
        );
    }
}

export default EditPet;
        