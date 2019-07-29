import React, { Component } from 'react';
import BrandContainer from '../container/BrandContainer'
import LikesContainer from '../container/LikesContainer'
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
            this.setState({user: profileInfo})
          })
        }
    }

    render() {
        return (
            <div>
              Logged in home page 
              <h3>state</h3>
              {this.state.user.username}
              <h3>props</h3>
              {this.props.user.username}

              {this.props.user.balance ?
                <h3>Blance: ${this.props.user.balance}</h3>
                :
                <h3>Blance: $0</h3>
              }
                

              <BrandContainer 
                  brands={this.props.brands} 
                  index={this.props.index} 
                  moreBrands={this.props.moreBrands}
                  lessBrands={this.props.lessBrands}
              />
              <LikesContainer 
                likes={this.props.likes}
                addToCart={this.props.addToCart}
                favorites={this.props.favorites}
                removeFavorite={this.props.removeFavorite}
              />
            </div>
        );
    }
}

export default HomePage;