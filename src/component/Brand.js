import React, { Component } from 'react';

class Brand extends Component {

    click = (event) => {
        console.log(event.target)
        
    }

    render() {
        return (
            <div className="brand" onClick={this.click}>
                {/* <img className="brandImg" alt={this.props.brand.name} src="https://marketplace.canva.com/MADGwAOEGtQ/5/screen_2x/canva-dog-near-fruit-MADGwAOEGtQ.jpg" /> */}
                {this.props.brand.name}
            </div>
        );
    }
}

export default Brand;