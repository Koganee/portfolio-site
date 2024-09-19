import monkeyImage from '../assets/images/Monkey.png';
import codingImage from '../assets/images/Coding.jpg'
import bambooImage from '../assets/images/bamboo_minecraft.png'

import { useNavigate } from "react-router-dom";

const FavouriteProjects = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/minecraft-mod-project");
    };
    const handleClick2 = () => {
        navigate("/webscraper-project");
    };




    return(
        <div className="window favourite-projects">
           <div className="title-bar">
                <h1 className="title" style = {{color: "black"}}>My Favourite Projects</h1>
            </div>
            <div className="separator"></div>
            <div className="window-pane favourite-projects" style = {{color: "black"}}>
            <div>
                <h4>Extra Bamboo Bits - A Minecraft Mod</h4>
                <div className="standard-dialog img3" onClick = {handleClick} style={{width:"10rem", height: "10rem", color: "black"}}>
                    <img src = {bambooImage} alt="Monkey" style={{width:"10rem", height: "10rem"}}></img>
                </div>
                <h4 style={{marginLeft:"-3rem"}}>Python Webscraper</h4>
                <div className="standard-dialog img4" onClick = {handleClick2} style={{width:"10rem", height: "10rem", color: "black"}}>
                    <img src = {codingImage} alt="Monkey" style={{width:"10rem", height: "10rem"}}></img>
                </div>
            </div>
            </div>
        </div>
    )
}

export default FavouriteProjects