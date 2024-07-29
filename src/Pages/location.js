import React from 'react';
import IMG1 from '../images/Rectangle 76.png';
import IMG2 from '../images/Rectangle 77 (1).png';
import '../style/location.css';

const Location = () => {
    const services = ["Service 1", "Service 2", "Service 3", "Service 4"]; // Example services

    return (
        <div className="location">
            <div className="place1">
                <img src={IMG1} alt="Location Image" />
                <div className="details">
                    <div className="name">
                        <label>THE WELL</label>
                        <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                        <h3>486 Front St W, Toronto, ON M5V 0V2 <br />647-372-0225</h3>
                    </div>
                    <div className="ser">
                        <h2>EXCLUSIVE SERVICES :</h2>

                        {services.map((service, index) => (
                            <li key={index}>✔️ {service} </li>
                        ))}

                    </div>
                </div>
            </div>
            <div className="place2">
                <img src={IMG2} alt="Location Image" />
                <div className="details">
                    <div className="name">
                        <label>YONGE / SHUTER</label>
                        <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                        <h3>225 Yonge Street, Toronto ON M5B 1N8 <br />647-372-0225</h3>
                    </div>
                    <div className="ser">
                        <h2>EXCLUSIVE SERVICES :</h2>

                        {services.map((service, index) => (
                            <li key={index}>✔️ {service} </li>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
