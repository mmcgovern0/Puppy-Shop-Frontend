import React, { Component } from 'react';
import ProductPage from '../component/ProductPage'

class ProductsContainer extends Component {
    render() {
        
        const product = this.props.products.map(product => {
            return <ProductPage key={product.id} product={product} addToCart={this.props.addToCart}/>
        })

        return (
            <div>
                {product}
            </div>
        );
    }
}

export default ProductsContainer;