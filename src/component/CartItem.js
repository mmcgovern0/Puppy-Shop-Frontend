import React, { Component } from 'react';

class CartItem extends Component {

    click = () => {
        this.props.removeFromCart(this.props.item)
    }

    render() {
        return (
            <div style={{padding: "10px", display: "grid"}}>
                {/* {this.props.item.name}
                {this.props.item.size}
                {this.props.item.description}
                {this.props.item.price}
                <button onClick={this.click}>🗑</button> */}
                <div className="ui centered card">
                <div className="content">
                <div className="header">{this.props.item.name}</div>
                <div className="description">
                    {this.props.item.description}
                </div>
                <div className="description">
                    Price: ${this.props.item.price}
                </div>
                </div>
                <div className="ui bottom attached button" onClick={this.click}>
                <i className="remove icon"></i>
                {/* <button onClick={this.click}>🗑</button> */}
                </div>
                </div>

            </div>
        );
    }
}

export default CartItem;

















