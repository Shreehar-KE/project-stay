import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbarContainer">
            <div className="logoContainer">
              <FontAwesomeIcon className='logoIcon' icon={faHotel} />
              <span className="logo">Project Stay</span>
            </div>
            <div className="navItems">
              <button className="navButton">Register</button>
              <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar