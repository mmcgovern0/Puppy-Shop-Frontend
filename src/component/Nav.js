import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {

    logout = () => {
        this.props.onLogout()
    }

    render() {
        return (
            <div className="Nav">
                <div className="ui inverted segment">                    
                    { this.props.user.id ? 
                        <div className="ui vertical animated button" tabIndex="0">
                        <div className="hidden content" ><Link to='/home' style={{ textDecoration: 'none', color: 'black' }}>Home</Link></div>
                        <div className="visible content">
                            <i className="home icon"></i>
                        </div>
                        </div>
                        :
                        <div className="ui vertical animated button" tabIndex="0">
                        <div className="hidden content"><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></div>
                        <div className="visible content">
                            <i className="home icon"></i>
                        </div>
                        </div>
                    }  
                            
                    <div className="ui vertical animated button" tabIndex="0">
                        <div className="hidden content"><Link to="/products" style={{ textDecoration: 'none', color: 'black' }}>Products</Link></div>
                        <div className="visible content">
                            <i className="shopping basket icon"></i>
                        </div>
                    </div>
                            

                            
                    

                        <div className="ui vertical animated button" tabIndex="0">
                            <div className="hidden content"><Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>Cart</Link></div>
                            <div className="visible content">
                                <i className="shopping cart icon"></i>
                            </div>
                        </div>


                    <div className="rightNav">

                        { this.props.user.id ?
                            <div className="ui vertical animated button" tabIndex="0">
                            <div className="hidden content"><Link to="/pets" style={{ textDecoration: 'none', color: 'black' }}>Pets</Link></div>
                            <div className="visible content">
                                <i className="paw icon"></i>
                            </div>
                            </div>
                            :
                            null
                        }

                        {this.props.user.id ?
                            <div className="ui vertical animated button" tabIndex="0">
                            <div className="hidden content" ><Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}>Profile</Link></div>
                            <div className="visible content">
                                <i className="user circle outline icon"></i>
                            </div>
                            </div>
                            :
                            null
                        }   

                        { this.props.user.id ? 
                            <div className="ui animated button" tabIndex="0" onClick={this.logout}>
                            <div className="hidden content" ><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Log Out</Link></div>
                            <div className="visible content">
                                <i className="right arrow icon"></i>
                            </div>
                            </div>
                            :
                            <div className="ui animated button" tabIndex="0">
                            <div className="hidden content" ><Link to='/login' style={{ textDecoration: 'none', color: 'black' }}>Log In</Link></div>
                            <div className="visible content">
                                <i className="right arrow icon"></i>
                            </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;




