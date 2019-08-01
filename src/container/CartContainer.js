import React, { Component } from 'react';
import CartItem from '../component/CartItem'
import Checkout from '../component/Checkout';


class CartContainer extends Component {
    
    reroute = () => {
        this.props.history.push('/home')
    }

    render() {

        let total = 0
        for(let i = 0; i < this.props.cartItems.length; i++){
            total += this.props.cartItems[i].price
        }
        

        const item = this.props.cartItems.map(item => {
            return( 
                <CartItem key={item.id} item={item} removeFromCart={this.props.removeFromCart}/>
            )
        })
        

        return (
            <div>
                {this.props.cartItems.length ?
                    item
                    :
                    <p style={{marginLeft: "45%", marginTop: "10%", fontSize: "30px", fontFamily: "fantasy"}}>Your cart is empty</p>
                }
                {this.props.cartItems.length ?
                    <div style={{textAlign: "center"}}>
                    <h3>Total: ${total}</h3>
                    <Checkout total={total} clearCart={this.props.clearCart} reroute={this.reroute}/>
                    </div>
                    :
                    null
                }
            </div>
        );
    }
}

export default CartContainer;


