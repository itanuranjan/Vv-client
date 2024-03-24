import React from 'react';
import '../Styles/OurStory.css'; // Import the CSS file for styling

const AboutUsPage = () => {
    return (
        <div className="about-us-page">
            <header>
                {/* <h1>About Us</h1> */}
            </header>
            <section className="content">
                <h2>Our Mission</h2>
                <p>We are committed to fostering innovation and entrepreneurship by providing a platform for aspiring entrepreneurs to connect, collaborate, and succeed.</p>
                <h2>Our Vision</h2>
                <p>To create a global community of innovators and change-makers who drive positive impact through their ventures.</p>
                <h2>Our Values</h2>
                <ul>
                    <li>Empowerment</li>
                    <li>Creativity</li>
                    <li>Community</li>
                    <li>Integrity</li>
                    <li>Innovation</li>
                </ul>
            </section>
            <div className="iframe-container">
                <iframe
                    src="https://drive.google.com/file/d/1GZgA6XQwNxlkcZ9aIDfzIHO2gXoh9sL3/preview?usp=embed_googleplus"
                    allowFullScreen
                    title="Google Drive Video"
                ></iframe>
            </div>
        </div>
    );
};

export default AboutUsPage;
