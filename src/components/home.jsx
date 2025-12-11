import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-image-banner.png";
import { FaAppStoreIos } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa6";
import Navbar from "./navbar";

const Home = () => {
    return (
        <div className="home-container" id="home">
            <Navbar />
            <div className="home-banner-container">
                <div className="home-bannerImage-container" data-aos="fade-left" data-aos-delay="200" data-aos-duration="400">
                    <img src={BannerBackground} alt="" />
                </div>
                <div className="home-text-section">
                    <h1 className="home-primary-heading" data-aos="fade-up">
                        Simplify Your Student Life at <span className="home-primary-heading" style={{ color: "#0794DE" }}>HCMUT</span>
                    </h1>
                    <p className="home-primary-text" data-aos="fade-up">
                        BkHelper is the essential all-in-one app for Ho Chi Minh City University of Technology students.
                        Manage your schedule, stay updated with campus new, and never miss an exam.
                    </p>
                    <div className="home-button-container" >
                        <button className="secondary-button app-store-button" data-aos="fade-right">
                            <FaAppStoreIos />{" "} App Store
                        </button>
                        <button className="secondary-button" data-aos="fade-left">
                            <FaGooglePlay />{" "} Google Play
                        </button>
                    </div>
                </div>
                <div className="home-image-section" data-aos="fade-up" data-aos-delay="200" >
                    <img src={BannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;
