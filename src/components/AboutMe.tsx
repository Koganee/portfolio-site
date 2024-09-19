import Image from "./Image"
import BackButton from "./BackButton"
import FavouriteProjects from "./FavouriteProjects"

const AboutMe = () => {
    return(
        <div>
        <Image></Image>
        <div className="content-container">
        <div className="window about-me">
            <div className="title-bar">
                <h1 className="title" style = {{color: "black"}}>About Me</h1>
            </div>
            <div className="separator"></div>

            <div className="window-pane" style = {{color: "black"}}>
                <p>Hi! My name is Aaron Murphy and I am a 3rd Year Student of Computer Science and Software Engineering at Maynooth University.</p>
                <p>In my free time I enjoy playing football, reading, and working on projects related to computer science.</p>
                <p>When working on projects, I like to incorporate my hobbies into what I aim to develop, which has led me to work on projects such as mods for videogames I like as well as a football stat tracker using machine learning.</p>
                <p>I have experience in using multiple programming languages such as Java, Python, Javascript and HTML + CSS, among others, and am currently in the process of learning C++.</p>
                <p>I am always eager to challenge myself and improve, and consistently find enjoyment in learning new technologies. Areas that particularly interest me are web development, game development, and machine learning.</p>
            </div>
        </div>
            <FavouriteProjects></FavouriteProjects>
        </div>
            <BackButton></BackButton>
        </div>
    )
}

export default AboutMe