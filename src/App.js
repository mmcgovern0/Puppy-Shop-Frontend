import './App.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './component/LoginPage'
import HomePage from './component/HomePage'
import SignupPage from './component/SignupPage'
import Nav from './component/Nav'
import LandingPage from './component/LandingPage'
import NotFoundPage from './component/NotFoundPage'
import ProfilePage from './component/ProfilePage'
import EditProfile from './component/EditProfile'
import PetShowPage from './component/PetShowPage'
import NewPet from './component/NewPet'
import EditPet from './component/EditPet'
import PetsContainer from './container/PetsContainer'
import CartContainer from './container/CartContainer';
import ProductsContainer from './container/ProductsContainer'

class App extends Component {

  state = {
    user: {},
    pets: [],
    brands: [],
    brandIndex: 0,
    products: [],
    cart: []
  }

  componentDidMount() {
    this.checkLoggedIn()
    this.findPets()
    this.fetchBrands()
    this.fetchProducts()
  }
  
  handleLogin = () => {
    this.checkLoggedIn()
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

  handleNewPet = (newPet) => {
    fetch('http://localhost:3001/pets', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          // Authorization: localStorage.token
      },
      body: JSON.stringify(newPet)
    })
    .then(r => r.json())
    .then(petData => {
      console.log(petData)
      this.setState({pets: [...this.state.pets, petData]})
    })
  }

  fetchBrands = () => {
    fetch('http://localhost:3001/brands')
    .then(r => r.json())
    .then(brandData => {
      this.setState({brands: brandData})
    })
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

  fetchProducts = () => {
    const headers = {}
    if (localStorage.token) {
      headers.Authorization = localStorage.token
    }
    fetch('http://localhost:3001/products', {
      headers: headers
    })
    .then(r => r.json())
    .then(productsData => {
      this.setState({products: productsData})
    })
  } 

  addToCart = (item) => {
    if(localStorage.token){
      this.setState({cart: [...this.state.cart, item]})
    } else {
      alert("Please log in or sign up")
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
            render={(routerProps) => <ProductsContainer {...routerProps} user={this.state.user} products={this.state.products} addToCart={this.addToCart}/>}
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
          <Route 
            path="/new-pet"
            render={(routerProps)=> <NewPet {...routerProps} user={this.state.user} handleNewPet={this.handleNewPet}/>}
          />
          <Route
            path="/edit-pet"
            render={(routerProps) => <EditPet {...routerProps} user={this.state.user}/>}
          />
          <Route
            path="/cart"
            render={(routerProps) => <CartContainer {...routerProps} cartItems={this.state.cart}/>}
          />
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    )

  }
}

export default App;