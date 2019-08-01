import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import img from '../img/adorable-animal-blur-406014.jpg'
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

    componentDidMount() {
        if(localStorage.token){
            fetch('http://localhost:3001/pets', {
                headers: {
                Authorization: localStorage.token
                }
            })
            .then(r => r.json())
            .then(petsData => {
                let userPet = petsData.filter(pet => {
                return pet.user_id === this.props.user.id
                })
                this.setState({pets: userPet})
            })
        }
    }

    render() {
        return (
            <div  className="pet-container">
                {/* <h2>{this.props.location.state.pet.name}</h2>
                Species:
                {this.props.location.state.pet.species}<br/>
                Breed:
                {this.props.location.state.pet.breed}<br/>
                Age:
                {this.props.location.state.pet.age} years<br/>
                Weight:
                {this.props.location.state.pet.weight} lbs.<br/>

                {/* <button onClick={this.click}>Delete {this.props.location.state.pet.name}</button> */}
                {/* <Link to={{pathname: '/edit-pet', state: {pet: this.props.location.state.pet}}}>Edit {this.props.location.state.pet.name}</Link> */}



                <div id="pet-show" className="ui card">
                    <div className="content">
                        <div className="center aligned header">{this.props.location.state.pet.name}</div>
                        <div className="center aligned description">
                        <p>{this.props.location.state.pet.name} is a beautiful {this.props.location.state.pet.breed} aged {this.props.location.state.pet.age}.</p>
                        <p>{this.props.location.state.pet.name} weighs {this.props.location.state.pet.weight} pounds</p>
                        </div>
                    </div>
                    <div className="extra content">
                        <div className="center aligned author">
                        <img className="ui avatar image" src={img}/> <br/>
                        <Link to={{pathname: '/edit-pet', state: {pet: this.props.location.state.pet}}}>Edit {this.props.location.state.pet.name}</Link>
                        </div>
                    </div>
                </div>




            </div>
        );
    }
}

export default PetShowPage;





