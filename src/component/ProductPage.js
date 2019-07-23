import React, { Component } from 'react';
// import { Link } from 'react-router-dom'


class ProductPage extends Component {

    click = () => {
        this.props.addToCart(this.props.product)
    }

    like = () => {
        console.log("like meeee")
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
                <span className="left floated like" onClick={this.like}>
                    <i className="like icon"></i>
                    Like
                </span>
                <span className="right floated cart" onClick={this.click}>
                    <i className="cart icon" ></i>
                    Add to cart
                </span>
            </div>
            </div>
        );
    }
}

export default ProductPage;
