import Image from "./Image"
import BackButton from "./BackButton"
import FavouriteProjects from "./FavouriteProjects"
import { useNavigate } from "react-router-dom";

const ContactMe = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/home");
    };


    return(
        


        <div>
        <div className="window">
            <div className="title-bar">
                <h1 className="title" style = {{color: "black"}}>Contact Me</h1>
            </div>
            <div className="separator"></div>

            <div className="window-pane" style = {{color: "black"}}>
                Here is where you can contact me:
                <div className="separator"></div>
                <p>- Email: aaronmurphy1244@gmail.com</p>
                <p>- LinkedIn: https://www.linkedin.com/in/aaron-murphy-439475322/</p>
                <p>- Github: https://github.com/Koganee</p>
            </div>
        </div>
            <button className="btn back2" onClick={handleClick}>Back</button>
        </div>
    )
}

export default ContactMe