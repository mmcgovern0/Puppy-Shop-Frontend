import React, { Component } from 'react';
import BrandContainer from '../container/BrandContainer'
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
      console.log(this.props.user)
        return (
            <div>
                Logged in home page 
                <h3>state</h3>
                {this.state.user.username}
                <h3>props</h3>
                {this.props.user.username}

                <BrandContainer 
                    brands={this.props.brands} 
                    index={this.props.index} 
                    moreBrands={this.props.moreBrands}
                    lessBrands={this.props.lessBrands}
                />
            </div>
        );
    }
}

export default HomePage;