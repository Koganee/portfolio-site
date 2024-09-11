import React from "react";
import { useNavigate } from "react-router-dom";

const EnterButton = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/home");
    };

    return(
        <button className="btn spaced-div btn-4" onClick={handleClick} style={{ marginRight: '-1.7rem' }}><span>Enter</span></button>  
    )
}

export default EnterButton