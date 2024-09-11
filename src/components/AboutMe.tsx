
const AboutMe = () => {
    return(
        <div className="window about-me" style = {{marginTop: "-2rem", marginRight: "-40rem"}}>
            <div className="title-bar">
                <h1 className="title" style = {{color: "black"}}>About Me</h1>
            </div>
            <div className="separator"></div>

            <div className="window-pane" style = {{color: "black"}}>
                <p>Hi! My name is Aaron Murphy and I am a 3rd Year Student of Computer Science and Software Engineering at Maynooth University.</p>
                <p>In my free time I enjoy playing football, reading, and working on projects related to computer science.</p>
                <p>When working on projects, I like to incorporate my hobbies into what I aim to develop, which has led me to work on projects such as mods for videogames as well as a football stat tracker.</p>

            </div>
        </div>

    )
}

export default AboutMe