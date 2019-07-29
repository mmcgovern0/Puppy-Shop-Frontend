import React, { Component } from 'react';
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import swal from 'sweetalert2'
// import { Link } from 'react-router-dom'

toast.configure();

class ProductPage extends Component {

    click = () => {
        this.props.addToCart(this.props.product)
        if(localStorage.token){
            swal.fire({
                position: 'center',
                type: 'success',
                title: 'Added to cart',
                showConfirmButton: false,
                timer: 1000
              });
        }
    }

    like = (event) => {
        this.props.addFavorite(this.props.user.id, this.props.product)
        event.target.style.color = "red"
        // if(localStorage.token){
        //     swal.fire({
        //         position: 'center',
        //         type: 'success',
        //         title: '❤️',
        //         showConfirmButton: false,
        //         timer: 1000
        //       });
        // }
    }

    addFav = () => {
        this.props.addFavorite(this.props.user.id, this.props.product)
    }



    render() {
        return (
            <div className="ui card">
                <div className="content">
                    <i className="right floated like icon"></i>
                <div className="header">{this.props.product.name}</div>
                <div className="description">
                    <p>{this.props.product.size}</p>
                    <span>${this.props.product.price}</span>
                </div>
            </div>
            <div className="extra content">
                <span className="left floated like">
                    <i className="like icon" onClick={this.like}></i>
                    Like
                </span>
                <span className="right floated cart" onClick={this.click}>
                    <i className="cart icon" ></i>
                    Add to cart
                </span>
            </div>
            <button onClick={this.addFav}>Add Favorite</button>
            </div>
        );
    }
}

export default ProductPage;
