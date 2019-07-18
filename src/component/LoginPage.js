import React, { Component } from 'react';

class LoginPage extends Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(r => r.json())
        .then(userData => {
            console.log(userData)
            if(userData.token){
                localStorage.setItem('token', userData.token)
                this.props.onLogin()
                this.props.history.push('/home')
            } else {
                alert("Incorrect username and/or password")
            }
            
        })
    }

    signup = () => {
        this.props.history.push('/signup')
    }

    render() {
        return (
            <div className="loginForm">
                {/* <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.username} onChange={this.handleChange} name="username"/>
                    <input type="password" value={this.state.password} onChange={this.handleChange} name="password"/>
                    <input type="submit" value="Log In"/>
                </form> */}
                <div className="ui placeholder segment">
                    <div className="ui two column very relaxed stackable grid">
                        <div className="column">
                        <div className="ui form">
                            <div className="field">
                            <label>Username</label>
                            <div className="ui left icon input">
                            <input type="text" value={this.state.username} onChange={this.handleChange} name="username"/>
                                <i className="user icon"></i>
                            </div>
                            </div>
                            <div className="field">
                            <label>Password</label>
                            <div className="ui left icon input">
                                <input type="password" value={this.state.password} onChange={this.handleChange} name="password"/>
                                <i className="lock icon"></i>
                            </div>
                            </div>
                            <div className="ui blue submit button" onClick={this.handleSubmit}>Login</div>
                        </div>
                        </div>
                        <div className="middle aligned column">
                        <div className="ui big button" onClick={this.signup}>
                            <i className="signup icon"></i>
                            Sign Up
                        </div>
                        </div>
                    </div>
                    <div className="ui vertical divider">
                        Or
                    </div>
                    </div>
            </div>
        );
    }
}

export default LoginPage;



