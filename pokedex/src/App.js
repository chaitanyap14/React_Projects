import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import PokeList from "./components/PokeList/PokeList.jsx";
import Pokemon from "./components/Pokemon/Pokemon.jsx";
import { results as data } from "./JSON/pokemon.json";
import "./App.css";

function PokemonInfo() {
    const { id } = useParams();
    return <Pokemon id={id} />;
}

function App() {
    const [search, setSearch] = useState("");
    const filteredPokemon = data.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase());
    });
    return (
        <Router>
            <div className="App">
                <Nav
                    handleChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
                <Switch>
                    <Route exact path="/">
                        <PokeList list={filteredPokemon} />
                    </Route>
                    <Route path="/:id">
                        <PokemonInfo />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
