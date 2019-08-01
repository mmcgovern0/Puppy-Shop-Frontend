import React, { Component } from 'react';
import BrandContainer from '../container/BrandContainer'
import logo from "../img/kisspng-silhouette-dog-clip-art-5b39f6d67f8fc5.4282530515305253985225.png"
import { Link } from 'react-router-dom'


class LandingPage extends Component {

    login = () => {
        this.props.history.push('/login')
    }

    render() {
        return (
            <div className="landing-page">
                <div id="landing-billboard" className="ui billboard test ad" data-text="Woof Pack™️">
                    <img className="landing-logo" src={logo} alt="Woof Pack"/>
                </div>

                <div className="landing-banner">
                    <h2>Woof Pack prides itself on providing quality products for your pet's health and wellbeing</h2>
                    <Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}><h3>Join the pack today</h3></Link>
                </div>
                <BrandContainer 
                    brands={this.props.brands} 
                    index={this.props.index} 
                    moreBrands={this.props.moreBrands}
                    lessBrands={this.props.lessBrands}
                />
            </div>
        );
    }
}

export default LandingPage;


