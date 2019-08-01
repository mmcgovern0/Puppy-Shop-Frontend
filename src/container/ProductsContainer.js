import React, { Component } from 'react';
import ProductPage from '../component/ProductPage'

class ProductsContainer extends Component {

    click = (e) => {
        console.log(e.target.value)
    }

    render() {
        
        const product = this.props.products.map(product => {
            return <ProductPage key={product.id} product={product} user={this.props.user} addToCart={this.props.addToCart} addToLikes={this.props.addToLikes} addFavorite={this.props.addFavorite}/>
        })

        return (
            <div>
                <div className="ui text menu" style={{padding: "20px"}}>
                <div className="header item">Sort By</div>
                <button className="item" value="food" onClick={this.click}>Food</button>
                <button className="item" value="toys" onClick={this.click}>Toys</button>
                <button className="item" value="collars" onClick={this.click}>Collars</button>
                <button className="item" value="harnesses" onClick={this.click}>Harnesses</button>
                <button className="item" value="beds" onClick={this.click}>Beds</button>
                <button className="item" value="health" onClick={this.click}>Health Care</button>
                
                
                {/* <a class="active item">
                    Closest
                </a>
                <a class="item">
                    Most Comments
                </a>
                <a class="item">
                    Most Popular
                </a> */}
                </div>
                {product}
            </div>
        );
    }
}

export default ProductsContainer;