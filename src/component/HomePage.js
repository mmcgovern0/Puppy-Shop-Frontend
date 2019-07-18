import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

class HomePage extends Component {

    state={
        user: {}
    }

    componentDidMount() {
        if(localStorage.token){
          fetch('http://localhost:3001/profile', {
            headers: {
              Authorization: localStorage.token
            }
          })
          .then(r => r.json())
          .then(profileInfo => {
            console.log("fetch in home page")
            this.setState({user: profileInfo})
          })
        }
    }

    render() {
        return (
            <div>
                Logged in home page
            </div>
        );
    }
}

export default HomePage;