import React, { Component } from 'react';

class LandingPage extends Component {

    login = () => {
        this.props.history.push('/login')
    }

    render() {
        return (
            <div>
                <h1>Costal Pet Supplies</h1>
            </div>
        );
    }
}

export default LandingPage;


