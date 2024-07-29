import React from 'react';
import '../style/footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-column">
                <h4>FITNESS</h4>
                <ul>
                    <li>Spin</li>
                    <li>Yoga</li>
                    <li>HIIT</li>
                    <li>All Classes</li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>SPA</h4>
                <ul>
                    <li>Restore & Recover</li>
                    <li>Infrared Sauna</li>
                    <li>Somadome Meditation</li>
                    <li>All Spa & Wellness Services</li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>TONIC HOUSE</h4>
                <ul>
                    <li>Workspace</li>
                    <li>Bar & Cafe</li>
                    <li>Space Rental</li>
                    <li>Upcoming Events</li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>ABOUT S&T</h4>
                <ul>
                    <li>Our Story</li>
                    <li>Locations</li>
                    <li>FAQ</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
