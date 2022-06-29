import React, {useState} from 'react';
import '../../../App.css';
import Axios from 'axios';

let AddPokemon = ({open, onClose}) => {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonChosen, setPokemonChosen] = useState(false);
    const [pokemon, setPokemon] = useState({
        name: "",
        species: "",
        img: "",
    });

    const searchPokemon = (event) => {
        event.preventDefault();
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response)=> {
            console.log(response); 
            setPokemon({
                name: pokemonName, 
                species: response.data.species.namem, 
                img: response.data.sprites.front_default});
        });
        setPokemonChosen(true)
    };

    if(!open) return null

    return (
        <React.Fragment>
            <div className='overlay'>
                <div className='modalContainer'>
                    <div className='top-menu row mb-2 justify-content-end '>
                        <div className='col-lg-8 mb-2'/>                    
                        <div className='col-sm-1 mb-2'>
                            <button onClick={onClose} className='btn btn-dark'>
                                <i className='fa-solid fa-x'/>
                            </button>
                        </div>
                        
                    </div>

                    <div className='TitleSection row'>
                            <form className="row">
                                <div className="col mb-2">
                                    <input 
                                        type="text" 
                                        className="form-control border-dark card-container" 
                                        placeholder="Enter the name of pokemon"
                                        onChange={(event) => {
                                            setPokemonName(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="col mb-2">
                                    <button onClick={searchPokemon} className="btn btn-dark"> Search Pokemon </button>
                                </div>
                                <div className="col mb-2" />
                            </form>    
                    </div>

                    <div className='row LoadoutSection'>
                        <div className='pokemon-img'>
                            <img src={pokemon.img} alt="" />
                        </div>
                        
                        <div className='col-md-4'>
                            <form>

                            </form>
                        </div>
                    </div>
                    

                </div>
            </div>
        </React.Fragment>
    )

};

export default AddPokemon; 