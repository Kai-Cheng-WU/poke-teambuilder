import React, {useState} from 'react';
import { useEffect } from 'react';
import {Link} from "react-router-dom";
import '../../../App.css';
import pokeball from '../../../icons/pokeball.png'
import AddPokemon from '../PokemonModals/AddPokemon'
import DeletePokemon from '../PokemonModals/DeletePokemon'
import EditPokemon from'../PokemonModals/EditPokemon'
import {PokemonService} from "../../../services/PokemonService";
import Spinner from '../../Spinner/Spinner';

let Home = () => {
    let [state, setState] = useState({
        loading : false,
        pokemons : [],
        errorMessage : ''
    });
 
    useEffect(() => {
        async function fetchData() {
            try{
                setState({...state, loading:true});
                let response = await PokemonService.getAllPokemons();
                setState({
                    ...state,
                    loading: false,
                    pokemons: response.data
                })
                console.log(response.data);
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
    }, []);

    let {loading, pokemons, errorMessage} = state;


    const [openAddModal, setOpenAddModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    
    const [currPokemonName, setCurrPokemonName] = useState(null);
    const [currPokemonId, setCurrPokemonId] = useState(null);



    return (
        <React.Fragment>
            <section className='contact-search p-3'>
                <div className='container'>
                    <div className='grid'>
                        <div className='row mb-2'>
                            <div className='col'>
                                <p className="stylish-text h2 d-flex justify-content-center p-1"> Breed pokemons, craft the best team!</p>
                                <p className="h3 p-3 " >MY BOX
                                    <button onClick={()=>setOpenAddModal(true)} className="btn btn-dark ms-2 stylish-text "> 
                                    <img src={pokeball} width="32" height="32"/> New Pokemon </button>
                                </p>
                            </div>
                            <AddPokemon open={openAddModal} onClose={()=>setOpenAddModal(false)}/>
                            
                        </div>
                        <div className='row'>
                            <div className="col-md-6">
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


            {
                loading ? <Spinner/> : <React.Fragment>
                    <section className="pokemon-list">
                        <div className='container'>
                            <div className="row">
                                {
                                    pokemons.length > 0 && pokemons.map(pokemon => {
                                        return (
                                            <div className="col-md-4" key={pokemon.id}>
                                                <div className="card my-2">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-lg-9">
                                                                {pokemon.name}
                                                            </div>
                                                            <div className="col-sm-1 m-1">
                                                                <button onClick={()=>{setCurrPokemonId(pokemon.id);setCurrPokemonName(pokemon.name);setOpenEditModal(true)}} className="btn btn-pokemonprofile">
                                                                    <i className='fa-solid fa-pen'/>
                                                                </button>
                                                            </div>
                                                            <EditPokemon open={openEditModal} onClose={()=>setOpenEditModal(false)} id={currPokemonId} pokemonName={currPokemonName}/>
                                                            <div className="col-sm-1 m-1">
                                                                <button onClick={()=>{setCurrPokemonId(pokemon.id);setCurrPokemonName(pokemon.name);setOpenDeleteModal(true)}} className="btn btn-pokemonprofile">
                                                                    <i className='fa-solid fa-trash'/>
                                                                </button>
                                                            </div>
                                                            <DeletePokemon open={openDeleteModal} onClose={()=>{setOpenDeleteModal(false);window.location.reload()}} id={currPokemonId} pokemonName={currPokemonName}/>
                                                        </div>
                                                            
                                                        <div className="row">
                                                            <Link to={`/pokemons/view/${pokemon.id}`} className="btn btn-pokemonprofile">
                                                                <div className="col d-flex">
                                                                    <img src={pokemon.sprite} alt="" className='pokemon-img d-flex'/>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
                
                </React.Fragment>
            }

        </React.Fragment>
    )

};



export default Home; 