
const MainPage = () => {
    return(
        

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0px' }}>
            <div className="title-bar center">
                <h1 className="title" style={{ color: 'black', marginRight: '-39.5rem' }}>What interests you?</h1>
            </div>
            <div className="standard-dialog center scale-down" style={{width:'30rem', color: 'black', transform: 'scale(0.5)', marginRight: '-7.5rem' }} >
                <h1 className="dialog-text" style={{ color: 'black' }}>Contact Me</h1>
                <p className="dialog-text" style={{ color: 'black' }}>&copy; 1984 Apple Computer</p>
            </div>
            <div className="standard-dialog center scale-down" style={{width:'30rem', color: 'black', transform: 'scale(0.5)', marginLeft: '-7.5rem' }} >
                <h1 className="dialog-text" style={{ color: 'black' }}>Projects</h1>
                <p className="dialog-text" style={{ color: 'black' }}>&copy; 1984 Apple Computer</p>
            </div>
            <div className="standard-dialog center scale-down" style={{width:'30rem', color: 'black', transform: 'scale(0.5)', marginLeft: '-15rem' }} >
                <h1 className="dialog-text" style={{ color: 'black' }}>About Me</h1>
                <p className="dialog-text" style={{ color: 'black' }}>&copy; 1984 Apple Computer</p>
            </div>
        </div>
    )
}

export default MainPage