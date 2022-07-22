import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Link, useParams} from "react-router-dom";
import { PokemonService } from '../../../services/PokemonService';
import Spinner from '../../Spinner/Spinner';
import Axios from 'axios';

let ViewPokemon = () => {

    let {pokemonId} = useParams();

    let [state, setState] = useState({
        loading : false,
        pokemon : {},
        errorMessage : ''
    });

    let [itemSprite, setItemSprite] = useState("");

    function getSprite(item) {
        console.log(item);
        Axios.get(`https://pokeapi.co/api/v2/item/${item}`).then((response)=> {
            setItemSprite(response.data.sprites.default);
        });
    }

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

    let {loading, pokemon, errorMessage} = state;
    return (
        <React.Fragment> 
            
            {
                loading ? <Spinner/> : <React.Fragment>
                    {getSprite(pokemon.item)}
                    <section className='view-pokemon mt-4'>
                        <div className='container'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-2 m-4'>
                                        <img src={pokemon.sprite} style={{flex:1, height:150, width:150}} alt=""/>
                                        {itemSprite!=null &&
                                            <img src={itemSprite} style={{flex:1, height:50, width:50}} alt=""/>
                                        }
                                    </div>
                                    <div className='col-md-4 m-4'>
                                        <ul className='list-group'>
                                            <li className='list-group-item list-group-item-action'>
                                                <i className="fa-solid fa-heart"/>: <span className='fw-bold'>{pokemon.hpTotal}</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                <i className="fa-solid fa-hand-fist"/>: <span className='fw-bold'>{pokemon.atkTotal}</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                <i className="fa-solid fa-shield-halved"/>: <span className='fw-bold'>{pokemon.defTotal}</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                <i className="fa-solid fa-wand-sparkles"/>: <span className='fw-bold'>{pokemon.spaTotal}</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                <i className="fa-solid fa-circle-half-stroke"/>: <span className='fw-bold'>{pokemon.spdTotal}</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                <i className="fa-solid fa-person-running"/>: <span className='fw-bold'>{pokemon.speTotal}</span>
                                            </li>
                                            <li className='list-group-item list-group-item-action'>
                                                <i className="fa-solid fa-masks-theater"/>: <span className='fw-bold'>{pokemon.nature}</span>
                                            </li>
                                            
                                            <li className='list-group-item list-group-item-action'>
                                                <i className="fa-solid fa-lightbulb"/>: <span className='fw-bold'>{pokemon.ability}</span>
                                            </li>
                                            
                                            <li className='list-group-item list-group-item-action'>
                                                <i className="fa-solid fa-bag-shopping"/>: <span className='fw-bold'>{pokemon.item}</span>
                                            </li>
                                            
                                        </ul>

                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <Link to = {'/pokemons/home'} className="btn btn-danger m-4"> Back </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                
                </React.Fragment>
            }
            
        </React.Fragment>
    )

};

export default ViewPokemon; 