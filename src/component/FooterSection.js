import React from 'react';
import '../style/footerSection.css';
import Phone from "../images/fsdfcew 1.png"



const LocationCard = () => {
    return (
        <div className='locations'>
            <div className="locationwork">
                <div className="location-card">
                    <div className="location-details">
                        <h4>YONGE / SHUTER</h4>
                        <p>225 Yonge Street, Toronto, ON M5B 1N8<br /> <br />647-372-0225</p>
                    </div>
                    <div className="location-hours">
                        <h5>OPEN:</h5>
                        <p>Monday – Thursday: 5:45 AM – 10 PM<br /><br />
                            Friday: 5:45 AM – 9 PM<br /><br />
                            Saturday: 7 AM – 7:30 PM<br /><br />
                            Sunday: 7:45 AM – 9 PM</p>
                    </div>
                </div>
                <div className="location-card">
                    <div className="location-details">
                        <h4>THE WALL</h4>
                        <p>486 Front St W, Toronto, ON M5V 0V2<br /> <br />647-372-0225</p>
                    </div>
                    <div className="location-hours">
                        <h5>OPEN:</h5>
                        <p>Monday – Thursday: 5:45 AM – 10 PM<br /><br />
                            Friday: 5:45 AM – 9 PM<br /><br />
                            Saturday: 7 AM – 7:30 PM<br /><br />
                            Sunday: 7:45 AM – 9 PM</p>
                    </div>
                </div>
            </div>
            <div class="newsletter-section">
                <h4>LET’S GET CONNECTED</h4>
                <p>Receive news, special offers and other emails from Sweat and Tonic. Unsubscribe at any time. View our Terms and Privacy Policy.</p>
                <form class="newsletter-form">
                    <input type="text" placeholder="Name" class="input-field" />
                    <input type="email" placeholder="E-Mail" class="input-field" />
                    <button type="submit" class="subscribe-button">SUBSCRIBE</button>
                </form>
            </div>
            <div className="last">
                <p>YOUR FAVOURITE SWEAT AND TONIC CLASSES ANYTIME, ANYWHERE</p>
                <button>
                    GET 7 DAYS FOR FREE
                </button>
                <img src={Phone} alt="" />
            </div>


        </div>
    );
};

export default LocationCard;
