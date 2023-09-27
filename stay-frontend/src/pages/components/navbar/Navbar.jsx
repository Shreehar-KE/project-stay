import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbarContainer">
            <span className="logo">Project Stay</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar