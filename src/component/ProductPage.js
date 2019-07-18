import React, { Component } from 'react';
// import { Link } from 'react-router-dom'


class ProductPage extends Component {
    render() {
        return (
            <div>
                <h1>Yoooooo {this.props.user.username}</h1>
            </div>
        );
    }
}

export default ProductPage;