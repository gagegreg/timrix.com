import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <Link to="/" className="navbar-logo">TimTrix</Link>
                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
