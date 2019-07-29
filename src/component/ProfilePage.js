import React, { Component } from 'react';
import PetContainer from '../container/PetsContainer'
import LikesContainer from '../container/LikesContainer'
import swal from 'sweetalert2'

// import { Link } from 'react-router-dom'

class ProfilePage extends Component {

    click = () => {
        console.log("edit profile")
        this.props.history.push("/edit-profile")
    }

    addPet = () => {
        console.log("add pet")
        this.props.history.push('/new-pet')
    }

    allTrans = () => {
        console.log("all transactions")
    }

    secret = () => {
        swal.fire({
            title: 'Come fly with me',
            width: 600,
            padding: '3em',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
              center left
              no-repeat
            `
        })
    }

    

    render() {
        return (
            <div>
                <h1>Welcome {this.props.user.username}</h1> 

                <h2>User Info</h2>
                Username: {this.props.user.username}<br/>
                Name: {this.props.user.first_name} {this.props.user.last_name}<br/>
                email: {this.props.user.email}<br/>
                phone: {this.props.user.phone}<br/>
                Address: {this.props.user.address} City: {this.props.user.city} State: {this.props.user.state} Zip: {this.props.user.zip}<br/>

                <button onClick={this.click}>Edit Profile</button><br/>
                <hr/>
                <PetContainer pets={this.props.pets} user={this.props.user}/>
                <button onClick={this.addPet}>Add Pet</button>
                <hr/>
                <h3>Favorite Products</h3>
                <LikesContainer user={this.props.user} favorites={this.props.favorites} addToCart={this.props.addToCart}/>

                <hr/>
                <button onClick={this.secret}>Secret</button>
                <hr/>
                <h2>Add Transaction Container</h2>
                <button onClick={this.allTrans}>View All Transactions</button>
            </div>
        );
    }
}

export default ProfilePage;
