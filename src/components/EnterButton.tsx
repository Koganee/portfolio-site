import React from "react";
import { useNavigate } from "react-router-dom";

const EnterButton = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/home");
    };

    return(
        <button className="btn spaced-div" onClick={handleClick}>Enter</button>    
    )
}

export default EnterButton