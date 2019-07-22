import React, { Component } from 'react';

class EditProfile extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        username: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let newUser = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            username: this.state.username,
            password: this.state.password
        }
        fetch(`http://localhost:3001/users/${this.props.user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(r => r.json())
        .then(userData => {
            console.log(userData)
            // localStorage.setItem('token', userData.token)
            this.props.history.push('/profile')
        })
    }


    render() {
        console.log(this.props.user)
        return (
            <div>
                Edit Profile
                <div className="signupForm">
                {/* <input type="text" placeholder="first name" value={this.state.firstName} onChange={this.handleChange} name="firstName"/>
                <input type="text" placeholder="last name" value={this.state.lastName} onChange={this.handleChange} name="lastName"/>
                <input type="email" placeholder="email" value={this.state.email} onChange={this.handleChange} name="email"/>
                <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="phone number" value={this.state.phone} onChange={this.handleChange} name="phone"/>                    
                <input type="text" placeholder="address" value={this.state.address} onChange={this.handleChange} name="address"/>
                <input type="text" placeholder="city" value={this.state.city} onChange={this.handleChange} name="city"/>
                <input type="text" placeholder="state" value={this.state.state} onChange={this.handleChange} name="state"/>
                <input type="text" placeholder="zip code" value={this.state.zip} onChange={this.handleChange} name="zip"/>
                <input type="text" placeholder="username" value={this.state.username} onChange={this.handleChange} name="username"/>
                <input type="password" placeholder="password" value={this.state.password} onChange={this.handleChange} name="password"/> */}
                <div className="ui equal width form">
                <div className="fields">
                    <div className="field">
                    <label>Username</label>
                    <input type="text" placeholder={this.props.user.username} value={this.state.username} onChange={this.handleChange} name="username"/>
                    </div>
                    <div className="field">
                    <label>Password</label>
                    <input type="password" placeholder="password" value={this.state.password} onChange={this.handleChange} name="password"/>
                    </div>
                </div>
                <div className="fields">
                    <div className="field">
                    <label>First name</label>
                    <input type="text" placeholder={this.props.user.first_name} value={this.state.firstName} onChange={this.handleChange} name="firstName"/>
                    </div>
                    <div className="field">
                    <label>Last name</label>
                    <input type="text" placeholder={this.props.user.last_name} value={this.state.lastName} onChange={this.handleChange} name="lastName"/>
                    </div>
                </div>
                <div className="fields">
                    <div className="field">
                    <label>Phone Number</label>
                    <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder={this.props.user.phone} value={this.state.phone} onChange={this.handleChange} name="phone"/>
                    </div>
                    <div className="field">
                    <label>Email</label>
                    <input type="email" placeholder={this.props.user.email} value={this.state.email} onChange={this.handleChange} name="email"/>
                    </div>
                </div>
                <div className="fields">
                    <div className="field">
                    <label>Address</label>
                        <input type="text" placeholder={this.props.user.address} value={this.state.address} onChange={this.handleChange} name="address"/>      
                    </div>
                    <div className="field">
                    <label>City</label>
                    <input type="text" placeholder={this.props.user.city} value={this.state.city} onChange={this.handleChange} name="city"/>      
                    </div>
                    <div className="field">
                    <label>State</label>
                    <input type="text" placeholder={this.props.user.state} value={this.state.state} onChange={this.handleChange} name="state"/>
                    </div>
                    <div className="field">
                    <label>Zip</label>
                    <input type="text" placeholder={this.props.user.zip} value={this.state.zip} onChange={this.handleChange} name="zip"/>      
                    </div>
                </div>
                </div>
                {/* <input type="submit" value="Sign up"/> */}
                <div className="ui submit button" onClick={this.handleSubmit}>Submit</div>
            </div>
            </div>
        );
    }
}

export default EditProfile;