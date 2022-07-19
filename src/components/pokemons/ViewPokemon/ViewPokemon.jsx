import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Link, useParams} from "react-router-dom";
import { PokemonService } from '../../../services/PokemonService';

let ViewPokemon = () => {

    let {pokemonId} = useParams();

    let [state, setState] = useState({
        loading : false,
        pokemon : {},
        errorMessage : ''
    });

    useEffect(() => {
        async function fetchData() {
            try{
                setState({...state , loading: true});
                let response = await PokemonService.getPokemon(pokemonId);
                setState({
                    ...state,
                    loading: false,
                    pokemon: response.data
                })
            }
            
            catch(error){
                setState({
                    ...state,
                    loading: false,
                    errorMessage: error.message
                });
            }

        }
        fetchData();
    }, [pokemonId]);

    return (
        <React.Fragment>
            <h2>ViewPokemon</h2>
            <h2>{pokemonId}</h2>
        </React.Fragment>
    )

};

export default ViewPokemon; 