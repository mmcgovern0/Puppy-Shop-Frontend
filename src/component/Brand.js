import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Brand extends Component {

    render() {
        return (
            <div className="brand" onClick={this.click}>
                {/* <img className="brandImg" alt={this.props.brand.name} src="https://marketplace.canva.com/MADGwAOEGtQ/5/screen_2x/canva-dog-near-fruit-MADGwAOEGtQ.jpg" /> */}
                <Link to='/products' style={{ textDecoration: 'none', color: 'black' }}>{this.props.brand.name}</Link>
                
            </div>
        );
    }
}

export default Brand;