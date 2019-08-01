import React, { Component } from 'react';
import BrandContainer from '../container/BrandContainer'
import LikesContainer from '../container/LikesContainer'
import img from '../img/adorable-animal-breed-2023384.jpg'
import img2 from '../img/animal-blond-hair-canine-1898858.jpg'
import { Link } from 'react-router-dom'
import swal from 'sweetalert2'


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
              


              <div className="pusher">
              <div className="ui inverted vertical masthead center aligned segment">
                <div className="ui text container">
                  <h1 className="ui inverted header">
                    Welcome back to the pack, {this.state.user.first_name}
                  </h1>
                  <h2>Check out all of our new products</h2>
                  <div className="ui huge primary button"><Link to="/products" style={{ textDecoration: 'none', color: 'white' }}>Start Shopping</Link><i className="right arrow icon"></i></div>
                </div>

              </div>
            </div>


              
              
              <div className="ui vertical stripe segment">
                <div className="ui middle aligned stackable grid container">
                  <div className="row">
                    <div className="eight wide column">
                      <h3 className="ui header" style={{fontFamily: 'fantasy', fontWeight: 'bold', fontSize: '30px'}}>Woof Pack™️</h3>
                      <p>Leading the pack in pet products</p>
                      <h3 className="ui header" style={{fontFamily: 'fantasy', fontWeight: 'bold', fontSize: '30px'}}>We Help Owners and Their Companions</h3>
                      <p>Finding the perfect product for your pet has never been easier</p> 
                    </div>
                    <div className="six wide right floated column">
                      <img src={img} alt="cute pup"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ui vertical stripe quote segment">
                <div className="ui equal width stackable internally celled grid">
                  <div className="center aligned row">
                    <div className="column">
                      <h3>"What a company"</h3>
                      <p>That is what they all say about us</p>
                    </div>
                    <div className="column">
                      <h3>I wouldn't shop anywhere else</h3>
                      <p>
                        <img src={img2} alt="guy" className="ui avatar image"/>
                        <b>Marie</b>"CEO of Pups Paradise"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ui vertical stripe segment">
              <div className="ui text container">
                <h3 className="ui header">Breaking The Mold</h3>
                <p>Woof Pack is not your conventional pet supplier, we pride ourselves on the nurture and well being of every pet</p>
                <button className="ui large button" onClick={this.secret}>Read More</button>
                <h4 className="ui horizontal header divider">
                  <p>Favorite Products</p>
                </h4>
                <h3 className="ui header">Add Your Favorite Products Directly to Your Cart</h3>
                <LikesContainer 
                likes={this.props.likes}
                addToCart={this.props.addToCart}
                favorites={this.props.favorites}
                removeFavorite={this.props.removeFavorite}
                />
              </div>
            </div>


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