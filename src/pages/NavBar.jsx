import "../css/NavBar.css"
import logo from '../assets/logo.png'


function NavBar() 
{
    return (
        <div className="nav-bar">
            <nav>
                <img src={logo} alt="logo" className="logo"></img>
                <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">How it works</a></li>
                    <li><a href="#">Privacy</a></li>
                </ul>
                <div>
                    <a href="#" className="login-button">Log In</a>
                    <a href="#" className="download-button">Download App</a>
                </div>
            </nav>
        </div>
    )
}

export default NavBar