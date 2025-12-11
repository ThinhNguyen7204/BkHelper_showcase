
import Map from '../assets/map.png'
import Notification from '../assets/notifications.png'
import Calendar from '../assets/calendar.png'
import Security from '../assets/security.png'
import Forum from '../assets/forum.png'
import Chat from '../assets/chat.png'


const featureInfoData = [
    {
        id: 1,
        title: "Secure Login",
        desc: "Access your academic information instantly with a simple and secure login experience designed for HCMUT students.",
        image: Security,
    },
    {
        id: 2,
        title: "Personal Calendar",
        desc: "Organize your study life with an integrated calendar that tracks classes, deadlines, exams, and learning activities all in one place.",
        image: Calendar,
    },
    {
        id: 3,
        title: "Push Notifications",
        desc: "Receive real-time alerts for schedule changes, school announcements, upcoming deadlines, and important campus updates.",
        image: Notification,
    },
    {
        id: 4,
        title: "Shared Course Forum",
        desc: "Join class discussions, share resources, and collaborate with peers through interactive course-based forums.",
        image: Forum,
    },
    {
        id: 5,
        title: "Student Chatroom",
        desc: "Enhance collaboration with classmates through dedicated chatrooms for each course, enabling discussion, questions, and group study.",
        image: Chat,
    },
    {
        id: 6,
        title: "Campus Map Navigation",
        desc: "Explore and navigate the HCMUT campus effortlessly with an interactive smart map showing buildings, classrooms, and key locations.",
        image: Map,
    },
];

const Features = () => {
    return (
        <div className="feature-section-wrapper" id="features">
            <div className="feature-section-top">
                <p className="primary-subheading" data-aos="fade-up" data-aos-delay="80">MVP FEATURES</p>
                <h1 className="primary-heading" data-aos="fade-up" data-aos-delay="160">Every Thing You Need In One App</h1>
                <p className="primary-text" data-aos="fade-up" data-aos-delay="240">
                    BkHelper integrates all the essential tools for student life, making it easier than ever to stay organized and informed.
                </p>
            </div>
            <div className="feature-section-bottom">
                {featureInfoData.map((data) => (
                    <div className="work-section-info" key={data.title} data-aos="fade-up" data-aos-delay="240">
                        <div className="info-boxes-img-container">
                            <img
                                src={data.image}
                                alt=""
                                height={100}
                                width={100}
                            />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features