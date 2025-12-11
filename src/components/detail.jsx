
import { AiFillStar } from "react-icons/ai";
import { FaAppStoreIos } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";

const Detail = () => {
    return (
        <div className="detail-section-wrapper" id="detail">
            <div className="detail-section-top">
                <p className="primary-subheading" data-aos="fade-up" data-aos-delay="80">DETAIL</p>
                <h1 className="primary-heading" data-aos="fade-up" data-aos-delay="160">Explore the Full Project</h1>
            </div>
            <div className="testimonial-section-bottom">
                <p style={{ color: "white" }} data-aos="fade-up" data-aos-delay="240">
                    A design project focused on creating a seamless and intuitive journey for modern travelers, from planning to destination.
                </p>
                <div className="home-button-container detail-button">
                    <a
                        href="https://www.figma.com/design/YqqXZut7JZfwqIincZwN17/BkHelper?node-id=0-1&t=AH7LUHHdvSqJqme3-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-button behance-button"
                        data-aos="fade-right"
                        data-aos-delay="240"
                        aria-label="View on Behance"
                    >
                        <FaBehanceSquare />{" "} View on Behance
                    </a>

                    <a
                        href="https://www.figma.com/design/YqqXZut7JZfwqIincZwN17/BkHelper?node-id=0-1&t=AH7LUHHdvSqJqme3-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-button figma-button"
                        data-aos="fade-left"
                        data-aos-delay="240"
                        aria-label="Open in Figma"
                    >
                        <FaFigma />{" "} Open in Figma
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Detail