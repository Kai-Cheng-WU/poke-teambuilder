import React, {useState} from 'react';
import '../../../App.css';
import Axios from 'axios';

let AddPokemon = ({open, onClose}) => {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemon, setPokemon] = useState({
        name: "",
        species: "",
        img: "",
        base_hp: 0,
        base_atk: 0,
        base_def: 0,
        base_spa: 0,
        base_spd: 0,
        base_spe: 0,
    });
    const [hpEV, setHpEV] = useState(0);
    const [hpIV, setHpIV] = useState(0);
    const [hpTotal, setHpTotal] = useState(0);

    const [atkEV, setAtkEV] = useState(0);
    const [atkIV, setAtkIV] = useState(0);
    const [atkTotal, setAtkTotal] = useState(0);

    const [defEV, setDefEV] = useState(0);
    const [defIV, setDefIV] = useState(0);
    const [defTotal, setDefTotal] = useState(0);

    const [spaEV, setSpaEV] = useState(0);
    const [spaIV, setSpaIV] = useState(0);
    const [spaTotal, setSpaTotal] = useState(0);

    const [spdEV, setSpdEV] = useState(0);
    const [spdIV, setSpdIV] = useState(0);
    const [spdTotal, setSpdTotal] = useState(0);

    const [speEV, setSpeEV] = useState(0);
    const [speIV, setSpeIV] = useState(0);
    const [speTotal, setSpeTotal] = useState(0);

    const [nature, setNature] = useState("Hardy");

    function calculateStatsTotal(e) {
        e.preventDefault();
        switch(nature){
            case 'Hardy':
                setAtkTotal(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5);
                setDefTotal(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5);
                setSpaTotal(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5);
                setSpdTotal(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5);
                setSpeTotal(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5);
                break;

            case 'Lonely':
                setAtkTotal(Math.floor(1.1*(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5)));
                setDefTotal(Math.floor(0.9*(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5)));
                setSpaTotal(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5);
                setSpdTotal(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5);
                setSpeTotal(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5);
                break;

            case 'Brave':
                setAtkTotal(Math.floor(1.1*(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5)));
                setDefTotal(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5);
                setSpaTotal(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5);
                setSpdTotal(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5);
                setSpeTotal(Math.floor(0.9*(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5)));
                break;

            case 'Adamant':
                setAtkTotal(Math.floor(1.1*(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5)));
                setDefTotal(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5);
                setSpaTotal(Math.floor(0.9*(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5)));
                setSpdTotal(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5);
                setSpeTotal(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5);
                break;

            case 'Naughty':
                setAtkTotal(Math.floor(1.1*(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5)));
                setDefTotal(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5);
                setSpaTotal(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5);
                setSpdTotal(Math.floor(0.9*(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5)));
                setSpeTotal(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5);
                break; 

            case 'Bold':
                setAtkTotal(Math.floor(0.9*(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5)));
                setDefTotal(Math.floor(1.1*(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5)));
                setSpaTotal(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5);
                setSpdTotal(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5);
                setSpeTotal(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5);
                break;

            case 'Docile':
                setAtkTotal(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5);
                setDefTotal(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5);
                setSpaTotal(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5);
                setSpdTotal(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5);
                setSpeTotal(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5);
                break;

            case 'Relaxed':
                setAtkTotal(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5);
                setDefTotal(Math.floor(1.1*(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5)));
                setSpaTotal(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5);
                setSpdTotal(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5);
                setSpeTotal(Math.floor(0.9*(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5)));
                break;

            case 'Impish':
                setAtkTotal(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5);
                setDefTotal(Math.floor(1.1*(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5)));
                setSpaTotal(Math.floor(0.9*(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5)));
                setSpdTotal(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5);
                setSpeTotal(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5);
                break;

            case 'Lax':
                setAtkTotal(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5);
                setDefTotal(Math.floor(1.1*(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5)));
                setSpaTotal(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5);
                setSpdTotal(Math.floor(0.9*(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5)));
                setSpeTotal(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5);
                break;

            case 'Timid':
                setAtkTotal(Math.floor(0.9*(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5)));
                setDefTotal(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5);
                setSpaTotal(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5);
                setSpdTotal(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5);
                setSpeTotal(Math.floor(1.1*(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5)));
                break;

            case 'Hasty':
                setAtkTotal(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5);
                setDefTotal(Math.floor(0.9*(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5)));
                setSpaTotal(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5);
                setSpdTotal(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5);
                setSpeTotal(Math.floor(1.1*(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5)));
                break;

            case 'Serious':
                setAtkTotal(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5);
                setDefTotal(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5);
                setSpaTotal(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5);
                setSpdTotal(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5);
                setSpeTotal(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5);
                break;

            case 'Jolly':
                setAtkTotal(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5);
                setDefTotal(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5);
                setSpaTotal(Math.floor(0.9*(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5)));
                setSpdTotal(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5);
                setSpeTotal(Math.floor(1.1*(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5)));
                break;

            case 'Naive':
                setAtkTotal(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5);
                setDefTotal(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5);
                setSpaTotal(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5);
                setSpdTotal(Math.floor(0.9*(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5)));
                setSpeTotal(Math.floor(1.1*(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5)));
                break;

            case 'Modest':
                setAtkTotal(Math.floor(0.9*(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5)));
                setDefTotal(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5);
                setSpaTotal(Math.floor(1.1*(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5)));
                setSpdTotal(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5);
                setSpeTotal(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5);
                break;

            case 'Mild':
                setAtkTotal(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5);
                setDefTotal(Math.floor(0.9*(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5)));
                setSpaTotal(Math.floor(1.1*(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5)));
                setSpdTotal(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5);
                setSpeTotal(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5);
                break;

            case 'Quiet':
                setAtkTotal(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5);
                setDefTotal(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5);
                setSpaTotal(Math.floor(1.1*(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5)));
                setSpdTotal(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5);
                setSpeTotal(Math.floor(0.9*(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5)));
                break;

            case 'Bashful':
                setAtkTotal(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5);
                setDefTotal(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5);
                setSpaTotal(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5);
                setSpdTotal(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5);
                setSpeTotal(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5);
                break;

            case 'Rash':
                setAtkTotal(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5);
                setDefTotal(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5);
                setSpaTotal(Math.floor(1.1*(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5)));
                setSpdTotal(Math.floor(0.9*(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5)));
                setSpeTotal(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5);
                break;

            case 'Calm':
                setAtkTotal(Math.floor(0.9*(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5)));
                setDefTotal(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5);
                setSpaTotal(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5);
                setSpdTotal(Math.floor(1.1*(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5)));
                setSpeTotal(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5);
                break;

            case 'Gentle':
                setAtkTotal(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5);
                setDefTotal(Math.floor(0.9*(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5)));
                setSpaTotal(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5);
                setSpdTotal(Math.floor(1.1*(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5)));
                setSpeTotal(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5);
                break;

            case 'Sassy':
                setAtkTotal(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5);
                setDefTotal(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5);
                setSpaTotal(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5);
                setSpdTotal(Math.floor(1.1*(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5)));
                setSpeTotal(Math.floor(0.9*(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5)));
                break;

            case 'Careful':
                setAtkTotal(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5);
                setDefTotal(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5);
                setSpaTotal(Math.floor(0.9*(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5)));
                setSpdTotal(Math.floor(1.1*(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5)));
                setSpeTotal(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5);
                break;

            case 'Quirky':
                setAtkTotal(Math.floor(0.01*(2*pokemon.base_atk+atkIV+Math.floor(0.25*atkEV))*50)+5);
                setDefTotal(Math.floor(0.01*(2*pokemon.base_def+defIV+Math.floor(0.25*defEV))*50)+5);
                setSpaTotal(Math.floor(0.01*(2*pokemon.base_spa+spaIV+Math.floor(0.25*spaEV))*50)+5);
                setSpdTotal(Math.floor(0.01*(2*pokemon.base_spd+spdIV+Math.floor(0.25*spdEV))*50)+5);
                setSpeTotal(Math.floor(0.01*(2*pokemon.base_spe+defIV+Math.floor(0.25*speEV))*50)+5);
                break;
        }

        setHpTotal(Math.floor(0.01*(2*pokemon.base_hp+hpIV+Math.floor(0.25*hpEV))*50)+60);
        console.log(nature);
        
    }

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
                                    <h3><i className="fa-solid fa-heart"></i>: {pokemon.base_hp} + 
                                    <input className='evField' type="number" min="0" max="252" step="4" value={hpEV} onChange={e => setHpEV(+e.target.value)}/> + 
                                    <input className='ivField' type="number" min="0" max="31" value={hpIV} onChange={e => setHpIV(+e.target.value)}/> =  
                                    {hpTotal}</h3>
                                </div>
                                <div className='mb-2'>
                                    <h3><i className="fa-solid fa-hand-fist"></i>: {pokemon.base_atk} + 
                                    <input className='evField' type="number"  min="0" max="252" step="4" value={atkEV} onChange={e => setAtkEV(+e.target.value)}/> + 
                                    <input className='ivField' type="number"  min="0" max="31" value={atkIV} onChange={e => setAtkIV(+e.target.value)}/> =  
                                    {atkTotal}</h3>
                                </div>
                                <div className='mb-2'>
                                    <h3><i className="fa-solid fa-shield-halved"></i>: {pokemon.base_def} + 
                                    <input className='evField' type="number" min="0" max="252" step="4" value={defEV} onChange={e => setDefEV(+e.target.value)}/> + 
                                    <input className='ivField' type="number" min="0" max="31" value={defIV} onChange={e => setDefIV(+e.target.value)}/> =  
                                    {defTotal}</h3>
                                </div>
                                <div className='mb-2'>
                                    <h3><i className="fa-solid fa-wand-sparkles"></i>: {pokemon.base_spa} + 
                                    <input className='evField' type="number" min="0" max="252" step="4" value={spaEV} onChange={e => setSpaEV(+e.target.value)}/> + 
                                    <input className='ivField' type="number" min="0" max="31" value={spaIV} onChange={e => setSpaIV(+e.target.value)}/> =  
                                    {spaTotal}</h3>
                                </div>
                                <div className='mb-2'>
                                    <h3><i className="fa-solid fa-circle-half-stroke"></i>: {pokemon.base_spd} + 
                                    <input className='evField' type="number" min="0" max="252" step="4" value={spdEV} onChange={e => setSpdEV(+e.target.value)}/> + 
                                    <input className='ivField' type="number" min="0" max="31" value={spdIV} onChange={e => setSpdIV(+e.target.value)}/> =  
                                    {spdTotal}</h3>
                                </div>
                                <div className='mb-2'>
                                    <h3><i className="fa-solid fa-person-running"></i>: {pokemon.base_spe} + 
                                    <input className='evField' type="number" min="0" max="252" step="4" value={speEV} onChange={e => setSpeEV(+e.target.value)}/> + 
                                    <input className='ivField' type="number" min="0" max="31" value={speIV} onChange={e => setSpeIV(+e.target.value)}/> =  
                                    {speTotal}</h3>
                                </div>
                                <div className='mb-2'>
                                    <h3><i className="fa-solid fa-masks-theater"></i>: &nbsp;&nbsp;&nbsp;&nbsp;
                                        
                                            <select onChange={(e) => setNature(e.target.value)} defaultValue={"Hardy"}>
                                                <option value="Hardy">Hardy</option>
                                                <option value="Lonely">Lonely</option>
                                                <option value="Brave">Brave</option>
                                                <option value="Adamant">Adamant</option>
                                                <option value="Naughty">Naughty</option>
                                                <option value="Bold">Bold</option>
                                                <option value="Relaxed">Relaxed</option>
                                                <option value="Impish">Impish</option>
                                                <option value="Lax">Lax</option>
                                                <option value="Timid">Timid</option>
                                                <option value="Hasty">Hasty</option>
                                                <option value="Serious">Serious</option>
                                                <option value="Jolly">Jolly</option>
                                                <option value="Naive">Naive</option>
                                                <option value="Modest">Modest</option>
                                                <option value="Mild">Mild</option>
                                                <option value="Quiet">Quiet</option>
                                                <option value="Bashful">Bashful</option>
                                                <option value="Rash">Rash</option>
                                                <option value="Calm">Calm</option>
                                                <option value="Gentle">Gentle</option>
                                                <option value="Sassy">Sassy</option>
                                                <option value="Careful">Careful</option>
                                                <option value="Quirky">Quirky</option>
                                            </select>
                                    </h3>
                                </div>
                                <div className='mb-2'> 
                                    <h3><i className="fa-solid fa-lightbulb"/> : &nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type="text" className="w-25 mb-2" placeholder='ability'/></h3>
                                </div>
                                <div className='mb-2'> 
                                    <h3><i className="fa-solid fa-bag-shopping"/> : &nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type="text" className="w-25 mb-2" placeholder='held item'/></h3>
                                </div>
                                <div className='mb-2'>
                                    <button onClick={(e) => calculateStatsTotal(e)} className="btn btn-danger m-2"> Visualize Pokemon Stats</button>
                                    <input type='submit' className='btn btn-dark m-2' value="Add Pokemon"/>
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