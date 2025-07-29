import "../css/Home.css"
import "../css/NavBar.css"
import picture from "../assets/picture.png"

function Home() {
    return (
        <>
        <div className="content">
            <h1 className="anim">Iron<br></br>Core Gym</h1>
            <p className="anim">A gym is a facility equipped with exercise machines, weights, 
            and training spaces designed to help people improve their physical fitness.</p>
            <a href="#" className="download-button anim">Join Now</a>
        </div>
        <img src={picture} alt="picture" className="feature-img anim"></img>
        </>
    )
}

export default Home