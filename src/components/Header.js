import React, {Component} from "react";
import Search from "./Header/Search";
import Title from "./Header/Title";
import Cart from "./Header/Cart";

class Header extends Component {
    render() {
        return (
            <header className="flex-col-3 main-header">
                <Search />
                <Title />
                <Cart />
            </header>
        );
    }
}
export default Header;