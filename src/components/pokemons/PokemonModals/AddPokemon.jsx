import React, {useState} from 'react';
import '../../../App.css';

let AddPokemon = ({open, onClose}) => {
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
                                    <input type="text" className="form-control border-dark card-container" placeholder="Enter the name of pokemon"/>
                                </div>
                                <div className="col mb-2">
                                    <input type="submit" className="btn btn-dark" value="Search pokemon"/>
                                </div>
                                <div className="col mb-2" />
                            </form>    
                    </div>
                    

                </div>
            </div>
        </React.Fragment>
    )

};

export default AddPokemon; 