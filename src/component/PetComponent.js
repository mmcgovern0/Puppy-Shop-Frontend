import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import img from '../img/adorable-animal-blur-406014.jpg'
// import PetShowPage from './PetShowPage'

class PetComponent extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <div className="ui vertical stripe segment">
                    <div className="ui right aligned stackable grid container">
                    <div className="row">
                        <div className="eight wide column">
                        
                        <h3 className="ui header">{this.props.pet.name}</h3>
                        <p>{this.props.pet.breed}</p>
                        </div>
                        <div className="six wide center floated column">
                        <img src={img} className="ui small bordered rounded image"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="center aligned column">
                        <button className="ui small button"><Link to={{pathname: '/pet', state: {pet: this.props.pet}}}>View {this.props.pet.name}</Link></button>
                        </div>
                    
                    </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default PetComponent;




