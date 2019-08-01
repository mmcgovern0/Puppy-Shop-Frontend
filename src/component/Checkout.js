import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'
import swal from 'sweetalert2'


class Checkout extends Component {

    onToken = (token, addresses, amount=(this.props.total)) => {       
        fetch("http://localhost:3001/charges", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: localStorage.token
            },
            body: JSON.stringify({token: token, addresses: addresses,amount: amount})
        })
        .then(r => r.json())
        .then(chargeData => {
            console.log(chargeData)
            this.props.clearCart()
            this.props.reroute()
            swal.fire({
                type: 'info',
                title: 'Thank you for shopping with Woof Pack!',
                text: 'You can find your receipt from the link below',
                footer: `<a target="_blank" href=${chargeData.receipt_url}>Receipt</a>`
              })
        })
    }

    render() {
        return (
            <div style={{textAlign: "center"}}>
                <StripeCheckout 
                    stripeKey = "pk_test_LY6CUNPDbx7dikmgdOLdFBXE00tlIkXJlq"
                    token = {this.onToken}
                    amount = {this.props.total * 100}
                    billingAddress
                    shippingAddress
                    zipCode
                    description="Costal Pet Supplies"
                    image="https://images.unsplash.com/photo-1562176552-b512ffac91fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    label="Checkout→"  
                />
            </div>
        );
    }
}

export default Checkout;