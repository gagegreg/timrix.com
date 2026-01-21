import Hero from '../components/Hero';
import './Home.css';

function Home() {
    return (
        <div className="home-page">
            <Hero />
            <section className="intro-section">
                <div className="container">
                    <h2>Creative Aerial Cinematography</h2>
                    <p>
                        TimRix specializes in capturing the world from unique perspectives.
                        With high-performance FPV drones and cinema-grade equipment,
                        we deliver breathtaking visuals for film, broadcast, and events.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Home;
