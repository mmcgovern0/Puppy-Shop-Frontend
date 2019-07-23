import React, { Component } from 'react';

class NewPet extends Component {

    state = {
        name: "",
        species: "",
        breed: "",
        age: 0,
        weight: 0
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let newPet = {
            name: this.state.name,
            species: this.state.species,
            breed: this.state.breed,
            age: this.state.age,
            weight: this.state.weight,
            user_id: this.props.user.id
        }
        this.props.handleNewPet(newPet)
        this.props.history.push('/profile')

    }

    render() {
        console.log(this.state)
        return (
            <div className="signupForm">
                <div className="ui equal width form">
                <div className="fields">
                    <div className="field">
                    <label>Pet Name</label>
                    <input type="text" placeholder="pet name" value={this.state.name} onChange={this.handleChange} name="name"/>
                    </div>
                </div>
                <div className="fields">
                    <div className="field">
                    <label>Pet Species</label>
                    <input type="text" placeholder="pet species" value={this.state.species} onChange={this.handleChange} name="species"/>
                    </div>
                    <div className="field">
                    <label>Pet Breed</label>
                    <input type="text" placeholder="pet breed" value={this.state.breed} onChange={this.handleChange} name="breed"/>
                    </div>
                </div>
                <div className="fields">
                    <div className="field">
                    <label>Pet Age</label>
                    <input type="number" pplaceholder="pet age" value={this.state.age} onChange={this.handleChange} name="age"/>
                    </div>
                    <div className="field">
                    <label>Pet Weight</label>
                    <input type="number" placeholder="weight" value={this.state.weight} onChange={this.handleChange} name="weight"/>
                    </div>
                </div>
                </div>
                <div className="ui submit button" onClick={this.handleSubmit}>Submit</div>
            </div>
        );
    }
}

export default NewPet;