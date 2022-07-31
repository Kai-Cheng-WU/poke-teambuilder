import React, {useState} from 'react';
import '../../../App.css';
import Axios from 'axios';
import { PokemonService } from '../../../services/PokemonService';
import { Modal, Button} from "react-bootstrap";

let DeletePokemon = ({id, pokemonName, open, onClose}) => {

    let deletePokemon = async (e) => {
        await PokemonService.deletePokemon(id);    
    };


    return (
        <Modal show={open} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title> Delete Pokemon</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="alert alert-danger">
                    Do you want to release {pokemonName} from your box?
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="default" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={() => {
                    deletePokemon();
                    onClose();
                }}>
                    Release
                </Button>
            </Modal.Footer>
        </Modal>
    )

};

export default DeletePokemon;