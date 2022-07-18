import React from "react";
import pokeball from '../../assets/img/pokeball.gif';

let Spinner = () => {
    return (
        <React.Fragment>
            <div>
                <img src={pokeball} alt="" className="d-block m-auto" style={{width: '600px'}}/>
            </div>
            
        </React.Fragment>
    )
};

export default Spinner;