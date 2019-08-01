import React, { Component } from 'react';
import Like from '../component/Like'

class LikesContainer extends Component {
    render() {

        let userFavorites = this.props.favorites.map(favorite => {
            return <Like key={favorite.id} id={favorite.id} like={favorite.product} addToCart={this.props.addToCart} removeFavorite={this.props.removeFavorite}/>
        })

        return (
            <div className="fav-products">
                {userFavorites}
            </div>
        );
    }
}

export default LikesContainer;