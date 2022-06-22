import React, {useState} from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/pokemons/Home/Home";
import AddPokemon from "./components/pokemons/PokemonModals/AddPokemon/AddPokemon";
import EditPokemon from "./components/pokemons/PokemonModals/EditPokemon/EditPokemon";
import ViewPokemon from './components/pokemons/ViewPokemon/ViewPokemon';

let App = () => {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/pokemons/home'}/>}/>
        <Route path={'/pokemons/home'} element={<Home/>} />
        <Route path={'/pokemons/add'} element={<AddPokemon/>} />
        <Route path={'/pokemons/view/:pokeID'} element={<ViewPokemon/>} />
        <Route path={'/pokemons/edit/:pokeID'} element={<EditPokemon/>} />
      </Routes>

    </React.Fragment>
  );
}

export default App;
