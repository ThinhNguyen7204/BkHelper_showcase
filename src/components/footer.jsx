
import LogoWhite from "../assets/logo_white.png";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-top">
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src={LogoWhite} alt="BkHelper" />
                    </div>
                    <p className="footer-desc">
                        The essential app for HCMUT students.
                    </p>
                    <div className="footer-icons">
                        <a aria-label="linkedin" href="https://www.linkedin.com/in/thinhnguyen0702/" className="footer-icon"><SiLinkedin /></a>
                        <a aria-label="github" href="https://github.com/ThinhNguyen7204" className="footer-icon"><FaGithub /></a>
                        <a aria-label="facebook" href="https://www.facebook.com/thinhnguyen.83085" className="footer-icon"><FaFacebookF /></a>
                    </div>
                </div>

                <div className="footer-columns">
                    <div className="footer-column">
                        <h2 style={{ color: "white" }}>Links</h2>
                        <ul>
                            <li><a href="#home" style={{ color: "white" }}>Home</a></li>
                            <li><a href="#about" style={{ color: "white" }}>About</a></li>
                            <li><a href="#features" style={{ color: "white" }}>Features</a></li>
                            <li><a href="#benefits" style={{ color: "white" }}>Benefits</a></li>
                            <li><a href="#detail" style={{ color: "white" }}>Detail</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h2 style={{ color: "white" }}>Legal</h2>
                        <ul>
                            <li><a href="#privacy" style={{ color: "white" }}>Privacy Policy</a></li>
                            <li><a href="#terms" style={{ color: "white" }}>Terms of Service</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h2 style={{ color: "white" }}>Contact</h2>
                        <ul>
                            <li><a href="mailto:contact@bkhelper.app" style={{ color: "white" }}>thinh.nguyenhoquoc@hcmut.edu.vn</a></li>
                            <li><p style={{ color: "white" }}>(+84) 0359205778</p></li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-bottom">
                <p style={{ color: "white" }}>© 2025 BkHelper. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;