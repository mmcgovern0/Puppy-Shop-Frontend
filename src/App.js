import './App.css';
import React, { Component } from 'react';
import LoginPage from './component/LoginPage'
import HomePage from './component/HomePage'
import SignupPage from './component/SignupPage'
import ProductsContainer from './container/ProductsContainer'
import PetsContainer from './container/PetsContainer'
import NotFoundPage from './component/NotFoundPage'
import LandingPage from './component/LandingPage'
import { Switch, Route } from 'react-router-dom'
import Nav from './component/Nav'

class App extends Component {

  state = {
    user: {},
    pets: []
  }

  componentDidMount() {
    console.log("Component did mount in app")
    this.checkLoggedIn()
    this.findPets()
  }

  handleLogout = () => {
    localStorage.clear()
    this.setState({user: {}})
  }

  checkLoggedIn = () => {
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

  handleLogin = () => {
    this.checkLoggedIn()
  }

  findPets = () => {
    if(localStorage.token){
      fetch('http://localhost:3001/pets', {
        headers: {
          Authorization: localStorage.token
        }
      })
      .then(r => r.json())
      .then(petsData => {
        let userPet = petsData.filter(pet => {
          return pet.user_id === this.state.user.id
        })
        this.setState({pets: userPet})
        console.log(this.state.pets)
      })
    }
  }


  render() {

    return (
      <div>
        <Nav user={this.state.user} onLogout={this.handleLogout} />
        <Switch>
          <Route 
            exact 
            path="/" 
            render={(routerProps) => <LandingPage {...routerProps} user={this.state.user}/>}
          />
          <Route  
            path="/home" 
            render={(routerProps) => <HomePage {...routerProps} user={this.state.user}/>}
          />
          <Route
            path="/login"
            render={(routerProps) => <LoginPage {...routerProps} onLogin={this.handleLogin} />}
          />
          <Route 
            path="/signup" 
            render={(routerProps) => <SignupPage {...routerProps} onLogin={this.handleLogin} />}
          />
          <Route 
            path="/products" 
            render={(routerProps) => <ProductsContainer {...routerProps} user={this.state.user}/>}
          />
          <Route 
            path="/pets"
            render={(routerProps) => <PetsContainer {...routerProps} user={this.state.user} pets={this.state.pets} />}
          />
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    )

  }
}

export default App;