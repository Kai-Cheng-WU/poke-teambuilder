import axios from 'axios';

export class PokemonService {
    static serverURL = `http://localhost:9000`;

    static getAllPokemons(){
        let dataURL = `${this.serverURL}/pokemons`;
        return axios.get(dataURL);
    }

    static getPokemon(pokemonId){
        let dataURL =`${this.serverURL}/pokemons/${pokemonId}`;
        return axios.get(dataURL);
    }
}