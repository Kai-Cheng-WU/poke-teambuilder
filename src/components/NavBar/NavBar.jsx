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
                        <text style={{fontWeight: "bold"} }>
                        <span style={{color:'#ee1515'} }> Poke </span></text> 
                        <text style={{fontStyle: "italic", fontWeight: "bold"}}>Teambuilder</text> 
                    </Link>
                </div>
                


            </nav>
        </React.Fragment>
    )

};

export default NavBar; 