import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

class Search extends Component {
    render() {
        return (
            <div className="main-header__search-box">
                <form method="GET" className="search_form"  role="search">
                    <input type="text" className="search_form__input" placeholder="Search" />
                    <button className="btn btn__search">
                        <FontAwesomeIcon  icon={faSearch}/> 
                    </button>
                </form>
            </div>
        );
    }
}

export default Search;