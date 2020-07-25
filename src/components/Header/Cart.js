import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";

class Cart extends Component {
    render() {
        return (
            <div className="main-header__cart-box">
                <FontAwesomeIcon className="main-header__cart" icon={faShoppingBag} />
            </div>
        );
    }
}

export default Cart;