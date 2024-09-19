import monkeyImage from '../assets/images/Monkey.png';
import codingImage from '../assets/images/Coding.jpg'
import bambooImage from '../assets/images/bamboo_minecraft.png'
import armorImage from '../assets/images/bamboo_armor.png'
import polarbearImage from '../assets/images/bamboo_polarbear.png'

import { useNavigate } from "react-router-dom";

const BambooBitsPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/projects");
    };




    return(
        <div>
        <div className="window favourite-projects" style = {{width: "33rem"}}>
            
           <div className="title-bar">
                <h1 className="title" style = {{color: "black"}}>Extra Bamboo Bits</h1>
            </div>
            <div className="separator"></div>
            <div className="window-pane favourite-projects" style = {{color: "black",  justifyContent: "center", height: "100%", textAlign: "left"}}>
                <p>Extra Bamboo Bits is a Minecraft mod I developed to add further functionality to the in-game bamboo item.</p>
                <p>This was an extremely enjoyable experience to develop as throughout the mod's development I felt I was being challenged to learn new things and further my understanding of the game's modding environment.</p>
                <p>The mod can be downloaded at the following link:</p>
                <div className="separator"></div>
                <p>https://www.curseforge.com/minecraft/mc-mods/extra-bamboo-bits</p>
                <div className="separator"></div>
                <p>I have also made some other minecraft mods for minecraft, and am currently working on my most ambitious project yet: The Fairy Tale Forest Mod.</p>
                <p>Stay Updated Here:</p>
                <div className="separator"></div>
                <p>https://www.curseforge.com/members/kogane/projects</p>
                
            </div>
            
        </div>
        
        <button className="btn back2" onClick={handleClick}>Back</button>
        <div>
            <div className="standard-dialog img" style={{width:"20rem", height: "20rem", color: "black", marginTop: "-52rem"}}>
                <img src = {armorImage} alt="Monkey" style={{width:"20rem", height: "20rem"}}></img>
            </div>
            <div className="standard-dialog img2" style={{width:"20rem", height: "20rem", color: "black"}}>
                <img src = {polarbearImage} alt="Monkey" style={{width:"20rem", height: "20rem"}}></img>
            </div>
            
        </div>
            
        </div>
    )
}

export default BambooBitsPage