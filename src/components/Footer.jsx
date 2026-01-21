import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} TimRix LLC. All rights reserved.</p>
                <div className="footer-links">
                    {/* Social placeholders */}
                    <span className="social-icon">IG</span>
                    <span className="social-icon">LI</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
