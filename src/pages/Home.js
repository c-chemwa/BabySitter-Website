import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import TestimonialCard from '../components/TestimonialCard';
import BabysitterCard from '../components/BabysitterCard';
import './Home.css'; // Add CSS styling for home page

const Home = () => (
    <div>
        <Navbar />
        <Slider />
        <section className="about">
            <h2>About Us</h2>
            <p>We connect parents and guardians with trusted babysitters in their area...</p>
        </section>
        <section className="testimonials">
            <h2>Testimonials</h2>
            {/* Map through testimonials and display TestimonialCard */}
        </section>
        <section className="top-babysitters">
            <h2>Top Babysitters of the Month</h2>
            {/* Map through top babysitters and display BabysitterCard */}
        </section>
        <Footer />
    </div>
);

export default Home;
