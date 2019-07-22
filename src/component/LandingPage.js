import React, { Component } from 'react';
import BrandContainer from '../container/BrandContainer'

class LandingPage extends Component {

    login = () => {
        this.props.history.push('/login')
    }

    render() {
        return (
            <div>
                <h1>Costal Pet Supplies</h1>
                <h2>Dog Food</h2>
                <BrandContainer 
                    brands={this.props.brands} 
                    index={this.props.index} 
                    moreBrands={this.props.moreBrands}
                    lessBrands={this.props.lessBrands}
                />
                <h2>Dog Accessories</h2>
            </div>
        );
    }
}

export default LandingPage;


