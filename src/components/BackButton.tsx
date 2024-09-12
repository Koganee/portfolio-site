import React from "react";
import { useNavigate } from "react-router-dom";




const BackButton = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/home");
    };
    
    return(
        <div className="standard-dialog center scale-down" onClick={handleClick} style={{width:"44rem"}}>
            <button className="btn back">Back</button>
        </div>
    )
}

export default BackButton;