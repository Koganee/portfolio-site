import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/about-me");
    };
    const handleClick2 = () => {
        navigate("/projects");
    };
    const handleClick3 = () => {
        navigate("/contact-me");
    };


    return(
        
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0px' }}>
            <div className="title-bar center">
                <h1 className="title" style={{ color: 'black', marginRight: '-39.5rem' }}>What interests you?</h1>
            </div>
            <div className="standard-dialog center scale-down" onClick={handleClick} style={{width:'30rem', color: 'black', transform: 'scale(0.5)', marginRight: '-7.5rem' }} >
                <h1 className="dialog-text">About Me</h1>
            </div>
            <div className="standard-dialog center scale-down" onClick={handleClick2} style={{width:'30rem', color: 'black', transform: 'scale(0.5)', marginLeft: '-7.5rem' }} >
                <h1 className="dialog-text">Projects</h1>
            </div>
            <div className="standard-dialog center scale-down" onClick={handleClick3} style={{width:'30rem', color: 'black', transform: 'scale(0.5)', marginLeft: '-15rem' }} >
                <h1 className="dialog-text">Contact Me</h1>
            </div>
        </div>
    )
}

export default MainPage