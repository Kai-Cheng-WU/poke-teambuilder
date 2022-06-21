import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import PokemonList from "./components/pokemons/PokemonList/PokemonList";
import AddPokemon from "./components/pokemons/AddPokemon/AddPokemon";
import EditPokemon from "./components/pokemons/EditPokemon/EditPokemon";
import ViewPokemon from './components/pokemons/ViewPokemon/ViewPokemon';

let App = () => {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/pokemons/list'}/>}/>
        <Route path={'/pokemons/list'} element={<PokemonList/>} />
        <Route path={'/pokemons/add'} element={<AddPokemon/>} />
        <Route path={'/pokemons/view/:pokeID'} element={<ViewPokemon/>} />
        <Route path={'/pokemons/edit/:pokeID'} element={<EditPokemon/>} />
      </Routes>

    </React.Fragment>
  );
}

export default App;
