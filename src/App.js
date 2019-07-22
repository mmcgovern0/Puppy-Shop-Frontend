import './App.css';
import React, { Component } from 'react';
import LoginPage from './component/LoginPage'
import HomePage from './component/HomePage'
import SignupPage from './component/SignupPage'
import ProductsContainer from './container/ProductsContainer'
import PetsContainer from './container/PetsContainer'
import NotFoundPage from './component/NotFoundPage'
import LandingPage from './component/LandingPage'
import ProfilePage from './component/ProfilePage'
import EditProfile from './component/EditProfile'
import PetShowPage from './component/PetShowPage'
import { Switch, Route } from 'react-router-dom'
import Nav from './component/Nav'

class App extends Component {

  state = {
    user: {},
    pets: [],
    brands: [],
    brandIndex: 0
  }

  componentDidMount() {
    this.checkLoggedIn()
    this.fetchBrands()
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

  fetchBrands = () => {
    fetch('http://localhost:3001/brands')
    .then(r => r.json())
    .then(brandData => {
      this.setState({brands: brandData})
    })
  }

  handleLogin = () => {
    this.checkLoggedIn()
  }

  nextFourBrands = () => {
    if(this.state.brandIndex < 8) {
      this.setState({brandIndex: this.state.brandIndex + 4})
    }
  }

  lastFourBrands = () => {
    if(this.state.brandIndex > 2) {
      this.setState({brandIndex: this.state.brandIndex - 4})
    }
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
            render={(routerProps) => <LandingPage {...routerProps} user={this.state.user} brands={this.state.brands} index={this.state.brandIndex} moreBrands={this.nextFourBrands} lessBrands={this.lastFourBrands}/> }
          />
          <Route  
            path="/home" 
            render={(routerProps) => <HomePage {...routerProps} user={this.state.user} brands={this.state.brands} index={this.state.brandIndex} moreBrands={this.nextFourBrands} lessBrands={this.lastFourBrands}/>}
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
          <Route
            path="/profile"
            render={(routerProps) => <ProfilePage {...routerProps} user={this.state.user} pets={this.state.pets}/>} 
          />
          <Route
            path="/edit-profile"
            render={(routerProps)=> <EditProfile {...routerProps} user={this.state.user}/>}
          />
          <Route 
            path="/pet"
            render={(routerProps)=> <PetShowPage {...routerProps} user={this.state.user}/>}
          />
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    )

  }
}

export default App;