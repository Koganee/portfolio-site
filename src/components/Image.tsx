import monkeyImage from '../assets/images/Monkey.png';

const Image = () => {
    return(
        <div>
            <div className="standard-dialog img" style={{width:"20rem", height: "20rem", color: "black"}}>
                <img src = {monkeyImage} alt="Monkey" style={{width:"20rem", height: "20rem"}}></img>
            </div>
            <div className="standard-dialog img2" style={{width:"20rem", height: "20rem", color: "black"}}>
                <img src = {monkeyImage} alt="Monkey" style={{width:"20rem", height: "20rem"}}></img>
            </div>
        </div>
    )
}

export default Image