import React, { Component } from 'react';
import swal from 'sweetalert2'


class Like extends Component {

    click = () => {
        this.props.addToCart(this.props.like)
        if(localStorage.token){
            swal.fire({
                position: 'center',
                type: 'success',
                title: 'Added to cart',
                showConfirmButton: false,
                timer: 1000
              });
        }
    }

    remove = () => {
        this.props.removeFavorite(this.props.id)
        // console.log(this.props.id)
    }

    render() {
        return (
            <div className="ui middle aligned divided list">
            <div className="item">
                <div className="left floated content">

                <div className="ui buttons">
                    <button className="ui positive button" onClick={this.click}>🛒</button>
                    <div className="or"></div>
                    <button className="ui button" onClick={this.remove}>🗑</button>
                </div>

                {/* <div className="ui button" onClick={this.click}>🛒</div>
                <div className="ui button" onClick={this.remove}>🗑</div>                 */}
                </div>
                {/* <img className="ui avatar image" src="/images/avatar2/small/lena.png" alt="like"/> */}
                <div className="content">
                {this.props.like.name} - {this.props.like.size} : ${this.props.like.price}
                </div>
            </div>
            </div>
        );
    }
}

export default Like;