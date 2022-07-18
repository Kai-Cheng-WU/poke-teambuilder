import axios from 'axios';

export class PokemonService {
    static serverURL = `http://localhost:9000`;

    static getAllPokemons(){
        let dataURL = `${this.serverURL}/pokemons`;
        return axios.get(dataURL);
    }
}