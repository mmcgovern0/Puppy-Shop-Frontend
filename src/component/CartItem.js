import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        return (
            <div>
                {this.props.item.name}
                {this.props.item.size}
                {this.props.item.description}
                {this.props.item.price}
                <hr/>

            </div>
        );
    }
}

export default CartItem;