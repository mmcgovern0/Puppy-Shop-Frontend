import React, { Component } from 'react';
import Brand from '../component/Brand'

class BrandContainer extends Component {
    render() {

        return (
            <div>
                <h3>Top-Rated Brands</h3>
                <hr/>
                <div className="belt">
                    <button onClick={this.props.lessBrands}>-</button>
                    {this.props.brands.slice(this.props.index, this.props.index + 4).map(brand => (
                        <Brand key={brand.id} brand={brand}/>
                        ))}
                    <button onClick={this.props.moreBrands}>+</button>
                </div>
                <hr />
            </div>
        );
    }
}

export default BrandContainer;