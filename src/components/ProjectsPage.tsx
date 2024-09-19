import Image from "./Image";
import BackButton from "./BackButton";
import FavouriteProjects from "./FavouriteProjects";
import monkeyImage from "../assets/images/Monkey.png";
import codingImage from "../assets/images/Coding.jpg";
import bambooImage from "../assets/images/bamboo_minecraft.png";
import knightImage from "../assets/images/KnightGuard.png";
import gamelogImage from "../assets/images/GameLog.png";
import game3Image from "../assets/images/game3.png";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/minecraft-mod-project");
  };

  const handleClick2 = () => {
    navigate("/webscraper-project");
  };
  const handleClick3 = () => {
    navigate("/gamelog");
  };

  const handleClick4 = () => {
    navigate("/godot-game");
  };
  const handleClick5 = () => {
    navigate("/home");
  };
  return (
    <div>
      <div className="window scale-down">
        <div className="title-bar">
          <h1 className="title" style={{ color: "black" }}>
            My Projects
          </h1>
        </div>

        {/* Wrap the projects in a flexbox container */}
        <div className="projects-container">
          <div className="project">
            <h4>Extra Bamboo Bits - A Minecraft Mod</h4>
            <div
              className="standard-dialog img5"
              onClick={handleClick}
              style={{ width: "10rem", height: "10rem", color: "black", marginTop: "-3rem", marginLeft: "-8rem" }}
            >
              <img
                src={bambooImage}
                alt="Bamboo Mod"
                style={{ width: "10rem", height: "10rem" }}
              />
            <p>Extra Bamboo Bits - A Minecraft Mod</p>
            </div>
          </div>

          <div className="project">
            <h4>Python Webscraper</h4>
            <div
              className="standard-dialog img6"
              onClick={handleClick2}
              style={{ width: "10rem", height: "10rem", color: "black", marginTop: "-3rem", marginLeft: "-8rem" }}
            >
              <img
                src={codingImage}
                alt="Python Webscraper"
                style={{ width: "10rem", height: "10rem" }}
              />
             <p>Python Webscraper</p> 
            </div>
          </div>

          <div className="project">
            <h4>Extra Bamboo Bits - A Minecraft Mod</h4>
            <div
              className="standard-dialog img7"
              onClick={handleClick3}
              style={{ width: "10rem", height: "10rem", color: "black", marginTop: "-3rem", marginLeft: "-5rem"  }}
            >
              <img
                src={gamelogImage}
                alt="Bamboo Mod"
                style={{ width: "10rem", height: "10rem" }}
              />
            <p>GameLog - Full Stack Videogame Tracker</p>  
            </div>
          </div>

          <div className="project">
            <h4>Python Webscraper</h4>
            <div
              className="standard-dialog img8"
              onClick={handleClick4}
              style={{ width: "10rem", height: "10rem", color: "black", marginTop: "-3rem", marginLeft: "-5rem" }}
            >
              <img
                src={game3Image}
                alt="Python Webscraper"
                style={{ width: "10rem", height: "10rem" }}
              />
            <p>Knights And Bossfights</p>    
            </div>
          </div>
        </div>
      </div>
      <button className="btn back2" onClick={handleClick5}>
        Back
      </button>
    </div>
  );
};

export default ProjectsPage;
