import "../css/Home.css"
import "../css/NavBar.css"
import ronnie from "../assets/rronnie.png"

function Home() {
    return (
        <>
        <div className="content">
            <h1 className="anim">Must<br></br>Go Gym Now</h1>
            <p className="anim">A gym is a facility equipped with exercise machines, weights, 
            and training spaces designed to help people improve their physical fitness.</p>
            <a href="#" className="download-button anim">Join Now</a>
        </div>
        <img src={ronnie} alt="gay" className="feature-img anim"></img>
        </>
    )
}

export default Home