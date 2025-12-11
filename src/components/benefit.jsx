import AboutBackground from "../assets/about-background.png";
import BenefitsBackgroundImage from "../assets/background-benefits.png";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Benefit = () => {
    return (
        <div className="benefit-section-container" id="benefits">
            <div className="benefit-background-image-container" data-aos="fade-right" data-aos-delay="200" data-aos-duration="900">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="benefit-section-image-container" data-aos="fade-right" data-aos-delay="200" data-aos-duration="900">
                <img
                    src={BenefitsBackgroundImage}
                    alt=""
                />
            </div>
            <div className="benefit-section-text-container" data-aos="fade-up">
                <p className="benefit-primary-subheading">BENEFITS</p>
                <h1 className="benefit-primary-heading" data-aos="fade-up" data-aos-delay="80">
                    Organize Your Academic Life Effortlessly
                </h1>
                <p className="benefit-primary-text" data-aos="fade-up" data-aos-delay="160">
                    With all your essential academic information in one place, you can reduce stress, save time, and focus more on your studies and campus life.
                </p>
                <ul className="benefit-list" data-aos="fade-up" data-aos-delay="240">
                    <li>
                        <BsFillCheckCircleFill className="benefit-icon" />
                        <span>Manage personal schedules effortlessly with an intuitive personal calendar.</span>
                    </li>
                    <li>
                        <BsFillCheckCircleFill className="benefit-icon" />
                        <span>Stay informed in real-time through push notifications and centralized announcements.</span>
                    </li>
                    <li>
                        <BsFillCheckCircleFill className="benefit-icon" />
                        <span>Connect and collaborate via shared course forums and classroom chatrooms.</span>
                    </li>
                    <li>
                        <BsFillCheckCircleFill className="benefit-icon" />
                        <span>Never get lost on campus with integrated campus map navigation and path finding.</span>
                    </li>
                    <li>
                        <BsFillCheckCircleFill className="benefit-icon" />
                        <span>Track course sessions and tasks efficiently for better academic performance.</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Benefit