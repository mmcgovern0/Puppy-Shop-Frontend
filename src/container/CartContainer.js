import React, { Component } from 'react';
import CartItem from '../component/CartItem'
// import {Elements, StripeProvider} from 'react-stripe-elements';
// import CheckoutForm from '../component/CheckoutForm';
import Checkout from '../component/Checkout';


class CartContainer extends Component {
    render() {

        let total = 0
        for(let i = 0; i < this.props.cartItems.length; i++){
            total += this.props.cartItems[i].price
        }
        

        const item = this.props.cartItems.map(item => {
            return( 
                <CartItem key={item.id} item={item}/>
            )
        })


        console.log(this.props.cartItems)
        

        return (
            <div>
                {this.props.cartItems.length ?
                    item
                    :
                    <p>Your cart is empty</p>
                }
                {this.props.cartItems.length ?
                    <div>
                    <h3>Total: ${total}</h3>
                    <Checkout total={total}/>
                    </div>
                    :
                    null
                }
            </div>
        );
    }
}

export default CartContainer;


