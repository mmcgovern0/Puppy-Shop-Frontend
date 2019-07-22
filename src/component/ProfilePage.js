import React, { Component } from 'react';
import PetContainer from '../container/PetsContainer'
// import { Link } from 'react-router-dom'

class ProfilePage extends Component {

    click = () => {
        console.log("edit profile")
        this.props.history.push("/edit-profile")
    }

    addPet = () => {
        console.log("add pet")
    }

    allTrans = () => {
        console.log("all transactions")
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.props.user.username}</h1> 

                <h2>User Info</h2>
                {this.props.user.username}<br/>
                {this.props.user.first_name}<br/>
                {this.props.user.last_name}<br/>
                {this.props.user.email}<br/>
                {this.props.user.phone}<br/>
                {this.props.user.address}<br/>
                {this.props.user.city}<br/>
                {this.props.user.state}<br/>
                {this.props.user.zip}<br/>

                <button onClick={this.click}>Edit Profile</button><br/>
                <hr/>
                <PetContainer pets={this.props.pets} user={this.props.user}/>
                <button onClick={this.addPet}>Add Pet</button>
                <hr/>
                <h2>Add Transaction Container</h2>
                <button onClick={this.allTrans}>View All Transactions</button>
            </div>
        );
    }
}

export default ProfilePage;
