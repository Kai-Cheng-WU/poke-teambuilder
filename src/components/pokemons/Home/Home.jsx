import React from 'react';
import {Link} from "react-router-dom";
import '../../../App.css';
import pokeball from '../../../icons/pokeball.png'

let Home = () => {
    return (
        <React.Fragment>
            <section className='contact-search p-3'>
                <div className='container'>
                    <div className='grid'>
                        <div className='row mb-2'>
                            <div className='col'>
                                <p className="stylish-text h2 d-flex justify-content-center p-1"> Breed your mons, craft your team!</p>
                                <p className="h3 p-3 " >MY BOX
                                    <Link to={'/pokemons/add'} className="btn btn-dark ms-2 stylish-text "> 
                                    <img src={pokeball} width="32" height="32"/> New Pokemon </Link>
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md6">
                                <form className="row">
                                    <div className="col mb-2">
                                        <input type="text" className="form-control border-dark card-container" placeholder="Browse my pokemons"/>
                                    </div>
                                    <div className="col mb-2">
                                        <input type="submit" className="btn btn-dark" value="Search"/>
                                    </div>
                                    <div className="col mb-2" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pokemon-list">
                <div className='container'>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            Charizard (placeholder)
                                        </div>
                                        <div className="col-sm-1 m-1">
                                            <Link to={'/pokemons/view/:pokeID'} className="btn btn-pokemonprofile">
                                                <i className='fa-solid fa-eye'/>
                                            </Link>
                                        </div>
                                        <div className="col-sm-1 m-1">
                                            <Link to={'/pokemons/edit/:pokeID'} className="btn btn-pokemonprofile">
                                                <i className='fa-solid fa-pen'/>
                                            </Link>
                                        </div>
                                        <div className="col-sm-1 m-1">
                                            <button className="btn btn-pokemonprofile">
                                                <i className='fa-solid fa-trash'/>
                                            </button>
                                        </div>   
                                    </div>
                                        
                                    <div className="row">
                                        <div className="col d-flex">
                                            <img src="https://archives.bulbagarden.net/media/upload/7/7e/006Charizard.png" alt="" className='pokemon-img d-flex'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )

};



export default Home; 