import React from "react";
import axios from "axios";
import "./Pokemon.css";

//TODO: Add redirect to PokeList from Pokemon on change in search bar.
//TODO: Display the data.
//TODO: Style this component.

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            data: {},
            stats: [],
            types: [],
            abilities: [],
        };
    }

    getData(id) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
            this.setState({
                data: res.data,
                stats: res.data.stats,
                types: res.data.types,
                abilities: res.data.abilities,
            });
            console.log(this.state.data);
        });
    }

    componentDidMount() {
        this.getData(this.props.id);
    }

    render() {
        return (
            <>
                <p>
                    Note: Search by Name does not work on this page. Please go
                    back to main pokemon list by clicking on the logo in order
                    to use the search function.
                </p>
                <div className="pokemon">
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.id}.png`}
                        alt="pokemon sprite"
                        className="sprite"
                    />
                    <h1 className="name">{this.state.data.name}</h1>
                    <div className="info">
                        <div className="physical">
                            <h2>Physical</h2>
                            <ul>
                                <li>ID: {this.state.data.id}</li>
                                <li>Height: {this.state.data.height / 10}m</li>
                                <li>Weight: {this.state.data.weight / 10}kg</li>
                            </ul>
                        </div>
                        <div className="stats">
                            <h2>Stats</h2>
                            <ul>
                                {this.state.stats.map((s) => {
                                    return (
                                        <li key={this.state.stats.indexOf(s)}>
                                            {s.stat.name}: {s.base_stat}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="type">
                            <h2>Types</h2>
                            <ul>
                                {this.state.types.map((t) => {
                                    return (
                                        <li key={this.state.types.indexOf(t)}>
                                            {t.type.name}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="abilities">
                            <h2>Abilities</h2>
                            <ul>
                                {this.state.abilities.map((a) => {
                                    return (
                                        <li
                                            key={this.state.abilities.indexOf(
                                                a
                                            )}
                                        >
                                            {a.ability.name}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Pokemon;
