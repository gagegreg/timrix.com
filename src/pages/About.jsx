import './About.css';
import aboutImg from '../assets/about.png';

function About() {
    return (
        <div className="page-content container">
            <h1 className="page-title">About TimRix</h1>

            <div className="about-grid">
                <div className="about-image">
                    <img src={aboutImg} alt="Drone Operator" />
                </div>

                <div className="about-content">
                    <h2>Elevating Visual Storytelling</h2>
                    <p>
                        Tim Coons is a visionary drone operator and cinematographer specializing in FPV and cinematic aerial footage.
                        With years of experience in broadcast and film, TimRix brings a unique perspective to every project.
                    </p>
                    <p>
                        From high-speed chases to sweeping landscapes, we push the boundaries of what is possible with drone technology.
                    </p>
                </div>
            </div>

            <div className="contact-section">
                <h2>Get In Touch</h2>
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="your@email.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" placeholder="Tell us about your project"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default About;
