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

            <section className="contact-list">

            </section>

        </React.Fragment>
    )

};



export default Home; 