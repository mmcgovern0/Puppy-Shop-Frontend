import React, { Component } from 'react';
import ProductPage from '../component/ProductPage'

class ProductsContainer extends Component {
    render() {
        console.log(this.props.user)
        console.log(localStorage.token)

        return (
            <div>
                ProductsContainer
                <ProductPage user={this.props.user}/>
            </div>
        );
    }
}

export default ProductsContainer;