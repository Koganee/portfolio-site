import EnterButton from "./EnterButton"





const NavBar = () => {
    return(
        <div className="window scale-down">
            <div className="title-bar">
                <h1 className="title" style={{ color: 'black' }}>Welcome!</h1>
            </div>
            <div className="separator"></div>
            <div className="window-pane typewriter" style={{ color: 'black' }}>
                My name is Aaron Murphy, welcome to my portfolio website :)
            </div>
            <EnterButton></EnterButton>
            <span style={{ margin: '0 10px' }}></span>
        </div>
    )
}

export default NavBar