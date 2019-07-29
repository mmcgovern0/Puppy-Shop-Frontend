import React, { Component } from 'react';
import ProductPage from '../component/ProductPage'

class ProductsContainer extends Component {
    render() {
        
        const product = this.props.products.map(product => {
            return <ProductPage key={product.id} product={product} user={this.props.user} addToCart={this.props.addToCart} addToLikes={this.props.addToLikes} addFavorite={this.props.addFavorite}/>
        })

        return (
            <div>
                {product}
            </div>
        );
    }
}

export default ProductsContainer;