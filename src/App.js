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
import swal from 'sweetalert2'


class App extends Component {

  state = {
    user: {},
    pets: [],
    brands: [],
    brandIndex: 0,
    products: [],
    cart: [],
    userCart: {},
    likes: [],
    favorites: []
  }

  componentDidMount() {
    this.checkLoggedIn()
    this.findPets()
    this.fetchBrands()
    this.fetchProducts()
    this.fetchCart()
    this.fetchFavorites()
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
      },
      body: JSON.stringify(newPet)
    })
    .then(r => r.json())
    .then(petData => {
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

  createCart = () => {
    if(localStorage.token){
      let userCart = {
        user_id: this.state.user.id,
        status: "unpaid"
      }
      fetch('http://localhost:3001/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: localStorage.token
        },
        body: JSON.stringify(userCart)
      })
    }
  }
  
  fetchCart = () => {
    if(localStorage.token){
      fetch('http://localhost:3001/carts', {
        headers: {
          Authorization: localStorage.token
        }
      })
      .then(r => r.json())
      .then(cartData => {
        let userCart = cartData.filter(cart => {
          return cart.user_id === this.state.user.id
        })
        this.setState({userCart: userCart})
      })
    }   
  }

  addToCart = (item) => {
    if(localStorage.token){
      this.setState({cart: [...this.state.cart, item]})
    } else {
      swal.fire("Please log in or sign up")
    }
  }

  updateBalance = (user, total) => {
    if (localStorage.token){
      let balance = user.balance - total
      let userBalance = {balance: balance}
      fetch(`http://localhost:3001/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(userBalance)
      })
      .then(r => r.json())
      .then(userData => {
        this.setState({user: userData})
      })
    }
  }

  fetchFavorites = () => {
    if(localStorage.token) {
      fetch('http://localhost:3001/favorite_products', {
        headers: {
          Authorization: localStorage.token
        }
      })
      .then(r => r.json())
      .then(favoriteData => {
        console.log(favoriteData)
        if(favoriteData){

          let favoritesObj = favoriteData.filter(favorite => {
            return favorite.user_id === this.state.user.id
          })
          this.setState({favorites: favoritesObj})

        }
      })       
    }
  }

  removeFavorite = (id) => {
    if(localStorage.token) {
      let newFavorites = this.state.favorites.filter(favorite => {
        return id !== favorite.id
      })
      this.setState({favorites: newFavorites})
      fetch(`http://localhost:3001/favorite_products/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: localStorage.token         
        }
      })
    }
  }

  addFavorite = (user, product) => {
    if(localStorage.token) {

      let checkProduct = this.state.favorites.find(favorite => {
        return favorite.product_id === product.id
      })

      if(checkProduct){
        swal.fire("This product is already favorited!")
      } else {
        let newFavoriteProduct = {
          user_id: user,
          product_id: product.id,
        }
        fetch('http://localhost:3001/favorite_products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: localStorage.token
            },
            body: JSON.stringify(newFavoriteProduct)
          })
          .then(r => r.json())
          .then(favoriteProductData => {
            this.setState({favorites: [...this.state.favorites, favoriteProductData]})
          }) 
          swal.fire({
            position: 'center',
            type: 'success',
            title: '❤️',
            showConfirmButton: false,
            timer: 1000
          }); 
      }      
    }
  }


  clearCart = () => {
    this.setState({cart: []})
  }
  

  addToLikes = (item) => {
    if(localStorage.token){
      this.setState({likes: [...this.state.likes, item]})
    } else {
      swal.fire("Please log in or sign up")
    }
  }

  removeFromCart = (item) => {
    if(localStorage.token){
      let newCart = this.state.cart.filter(cartItem => {
        return item.id !== cartItem.id
      })
      this.setState({cart: newCart})     
    }
  }



  render() {
    return (
      <div>
        <Nav 
          user={this.state.user} 
          onLogout={this.handleLogout} 
        />

        <Switch>
          <Route 
            exact 
            path="/" 
            render={(routerProps) => 
              <LandingPage 
                {...routerProps} 
                user={this.state.user} 
                brands={this.state.brands} 
                index={this.state.brandIndex} 
                moreBrands={this.nextFourBrands} 
                lessBrands={this.lastFourBrands}
              /> 
            }
          />
          <Route  
            path="/home" 
            render={(routerProps) => 
              <HomePage 
                {...routerProps} 
                user={this.state.user} 
                brands={this.state.brands} 
                index={this.state.brandIndex} 
                moreBrands={this.nextFourBrands} 
                lessBrands={this.lastFourBrands} 
                likes={this.state.likes} 
                favorites = {this.state.favorites}
                removeFavorite = {this.removeFavorite}
                addToCart={this.addToCart} 
                updateBalance={this.updateBalance}
              />
            }
          />
          <Route
            path="/login"
            render={(routerProps) => 
              <LoginPage 
                {...routerProps} 
                onLogin={this.handleLogin} 
              />
            }
          />
          <Route 
            path="/signup" 
            render={(routerProps) => 
              <SignupPage 
                {...routerProps} 
                onLogin={this.handleLogin} 
              />
            }
          />
          <Route 
            path="/products" 
            render={(routerProps) => 
              <ProductsContainer 
                {...routerProps} 
                user={this.state.user} 
                products={this.state.products} 
                addToCart={this.addToCart} 
                addToLikes={this.addToLikes}
                addFavorite={this.addFavorite}
              />
            }
          />
          <Route 
            path="/pets"
            render={(routerProps) => 
              <PetsContainer 
                {...routerProps} 
                user={this.state.user} 
                pets={this.state.pets} 
              />
            }
          />
          <Route
            path="/profile"
            render={(routerProps) => 
              <ProfilePage 
                {...routerProps} 
                user={this.state.user} 
                pets={this.state.pets} 
                favorites={this.state.favorites} 
                addToCart={this.addToCart}
                removeFavorite={this.removeFavorite}
              />
            } 
          />
          <Route
            path="/edit-profile"
            render={(routerProps)=> 
              <EditProfile 
                {...routerProps} 
                user={this.state.user}
              />
            }
          />
          <Route 
            path="/pet"
            render={(routerProps)=> 
              <PetShowPage 
              {...routerProps} 
              user={this.state.user}
              />
            }
          />
          <Route 
            path="/new-pet"
            render={(routerProps)=> 
              <NewPet 
              {...routerProps} 
              user={this.state.user} 
              handleNewPet={this.handleNewPet}
              />
            }
          />
          <Route
            path="/edit-pet"
            render={(routerProps) => 
              <EditPet 
              {...routerProps} 
              user={this.state.user}
              />
            }
          />
          <Route
            path="/cart"
            render={(routerProps) => 
              <CartContainer 
              {...routerProps} 
              cartItems={this.state.cart}
              user={this.state.user}
              updateBalance={this.updateBalance}
              clearCart={this.clearCart}
              removeFromCart={this.removeFromCart}
              />
            }
          />
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    )

  }
}

export default App;