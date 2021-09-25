import React from "react";

class PokeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            id: props.id,
        };
    }

    render() {
        return (
            <div className="pokecard">
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.id}.png`}
                    alt="sprite"
                />
                <h3>{this.state.name}</h3>
            </div>
        );
    }
}

export default PokeCard;
