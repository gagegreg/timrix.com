import { Link } from 'react-router-dom';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-background">
                <img src={heroBg} alt="Drone cinematography" />
                <div className="hero-overlay"></div>
            </div>
            <div className="hero-content">
                <h1 className="hero-title">TimRix</h1>
                <p className="hero-subtitle">ELEVATING PERSPECTIVES</p>
                <div className="hero-actions">
                    <Link to="/projects" className="btn btn-primary">View Projects</Link>
                    <Link to="/gallery" className="btn btn-outline">Explore Gallery</Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;
