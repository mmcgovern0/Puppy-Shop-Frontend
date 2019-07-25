import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'
// import { toast } from "react-toastify";

class Checkout extends Component {

    onToken = (token, addresses) => {
        fetch("http://localhost:3001/charges", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({token, addresses})
        })
        .then(r => r.json())
        .then(chargeData => {
            console.log(chargeData)
        })
    }

    render() {
        return (
            <StripeCheckout 
                stripeKey = "pk_test_LY6CUNPDbx7dikmgdOLdFBXE00tlIkXJlq"
                token = {this.onToken}
                amount = {this.props.total * 100}
                billingAddress
                zipCode
                description="Costal Pet Supplies"
                image="https://images.unsplash.com/photo-1562176552-b512ffac91fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                label="Pay with 💳"  
            />
        );
    }
}

export default Checkout;