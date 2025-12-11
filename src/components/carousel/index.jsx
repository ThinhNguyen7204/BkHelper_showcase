import Marquee from "react-fast-marquee";
import { FEATURES_DATA } from "../../helpers/features.data";
import "./carousel.css";

const FeaturesCarousel = () => {
    return (
        <section className="features-section">
            <Marquee
                gradient={false}
                speed={50}
                // pauseOnHover
                pauseOnClick
                loop={0}
                autoFill
            >
                {FEATURES_DATA.map((item, index) => (
                    <div className="phone-card" key={`${item.id}-${index}`}>
                        <div className="iphone-frame">
                            <div className="notch" />
                            <div className="screen">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    draggable={false}
                                />
                                <div className="caption">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Marquee>
        </section>
    );
};

export default FeaturesCarousel;
