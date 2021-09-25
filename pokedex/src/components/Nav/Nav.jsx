import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="navbar">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                    <h1 className="logo">POKEDEX</h1>
                </Link>
                <input
                    className="search-bar"
                    type="search"
                    placeholder="Search by Name"
                    onChange={this.props.handleChange}
                />
            </div>
        );
    }
}

export default Nav;
