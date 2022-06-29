import React from 'react';
import { Link } from 'react-router-dom';
import PokeBallShade from '../../icons/PokeBallShade';

let NavBar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-md"> 
                <div className='container'>
                    <Link to ={'/'} className="navbar-brand"> 
                        <PokeBallShade/>
                        <span style={{fontWeight: "bold"} }>
                        <span style={{color:'#ee1515'} }> Poke </span></span> 
                        <span style={{fontStyle: "italic", fontWeight: "bold"}}>Teambuilder</span> 
                    </Link>
                </div>
                


            </nav>
        </React.Fragment>
    )

};

export default NavBar; 