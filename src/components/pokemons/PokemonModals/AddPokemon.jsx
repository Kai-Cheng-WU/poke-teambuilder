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
        base_hp: "",
        base_atk: "",
        base_def: "",
        base_spa: "",
        base_spd: "",
        base_spe: "",
    });

    const searchPokemon = (event) => {
        event.preventDefault();
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response)=> {
            console.log(response); 
            setPokemon({
                name: pokemonName, 
                species: response.data.species.namem, 
                img: response.data.sprites.front_default,
                base_hp: response.data.stats[0].base_stat,
                base_atk: response.data.stats[1].base_stat,
                base_def: response.data.stats[2].base_stat,
                base_spa: response.data.stats[3].base_stat,
                base_spd: response.data.stats[4].base_stat,
                base_spe: response.data.stats[5].base_stat,
            });
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
                        
                        <div className='col-md-12'>
                            <form style={{maxWidth: "100%"}}>
                                <h1>{pokemon.name}</h1>
                                <div className='mb-2'>
                                    <h3><i class="fa-solid fa-heart"></i>: {pokemon.base_hp} + <input className='evField' type="number" placeholder='hp EV'/> + <input className='ivField' type="number" placeholder='hp IV'/> =  </h3>
                                </div>
                                <div className='mb-2'>
                                    <h3><i class="fa-solid fa-hand-fist"></i>: {pokemon.base_atk} + <input className='evField' type="number" placeholder='atk EV'/> + <input className='ivField' type="number" placeholder='atk IV'/> =  </h3>
                                </div>
                                <div className='mb-2'>
                                    <h3><i class="fa-solid fa-shield-halved"></i>: {pokemon.base_def} + <input className='evField' type="number" placeholder='def EV'/> + <input className='ivField' type="number" placeholder='def IV'/> =  </h3>
                                </div>
                                <div className='mb-2'>
                                    <h3><i class="fa-solid fa-wand-sparkles"></i>: {pokemon.base_spa} + <input className='evField' type="number" placeholder='spa EV'/> + <input className='ivField' type="number" placeholder='spa IV'/> =  </h3>
                                </div>
                                <div className='mb-2'>
                                    <h3><i class="fa-solid fa-circle-half-stroke"></i>: {pokemon.base_spd} + <input className='evField' type="number" placeholder='spd EV'/> + <input className='ivField' type="number" placeholder='spd IV'/> =  </h3>
                                </div>
                                <div className='mb-2'>
                                    <h3><i class="fa-solid fa-person-running"></i>: {pokemon.base_spe} + <input className='evField' type="number" placeholder='spe EV'/> + <input className='ivField' type="number" placeholder='spe IV'/> =  </h3>
                                </div>
                                
 
                            </form>
                        </div>
                    </div>
                    

                </div>
            </div>
        </React.Fragment>
    )

};

export default AddPokemon; 