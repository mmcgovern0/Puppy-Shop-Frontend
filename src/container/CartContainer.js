import React, { Component } from 'react';
import CartItem from '../component/CartItem'

class CartContainer extends Component {
    render() {

        let total = 0
        for(let i = 0; i < this.props.cartItems.length; i++){
            total += this.props.cartItems[i].price
        }
        console.log(total)

        const item = this.props.cartItems.map(item => {
            return <CartItem key={item.id} item={item}/>
        })

        
        

        return (
            <div>
                {
                    this.props.cartItems.length ?
                    item
                    :
                    <p>Your cart is empty</p>
                }
            </div>
        );
    }
}

export default CartContainer;