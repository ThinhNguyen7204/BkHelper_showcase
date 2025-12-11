import Carousel from "../components/carousel"

const About = () => {
    return (
        <div className="about-section-container" id="about">
            <div className="about-section-text-container">
                <p className="primary-subheading" data-aos="fade-up" data-aos-delay="80">ABOUT{" "} THE  APP</p>
                <h1 className="about-primary-heading" data-aos="fade-up" data-aos-delay="160">
                    By Students, For Students
                </h1>
                <p className="about-primary-text" data-aos="fade-up" data-aos-delay="240">
                    BkHelper was created to provide a seamless, intergrated mobile experience that helps
                    you manage your academic life, so you can focus on what truly matters, your education and universitye experience
                </p>
            </div>
            <div>
                <Carousel />
            </div>
        </div>
    )
}

export default About