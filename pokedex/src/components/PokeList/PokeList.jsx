import React from "react";
import { Link } from "react-router-dom";
import { results as data } from "../../JSON/pokemon.json";
import PokeCard from "../PokeCard/PokeCard.jsx";
import "./PokeList.css";

class PokeList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: data,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.list !== prevProps.list) {
            this.setState({ list: this.props.list });
        }
    }

    render() {
        this.pokeData = this.state.list.map((r) => {
            const id = data.indexOf(r) + 1;
            return (
                <Link
                    to={`/${id}`}
                    key={id}
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <PokeCard name={r.name} url={r.url} id={id} />
                </Link>
            );
        });
        return (
            <div>
                <ul className="pokelist">{this.pokeData}</ul>
            </div>
        );
    }
}

export default PokeList;
