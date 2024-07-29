import React from 'react';
import '../style/well.css';

const Well = () => {
    const ar1 = ["Sauna", "Somadome Mediations", "Massage Therapy", "physiotherapy", "Saltwater lap pool", "Hydrotherapy"];
    return (
        <div className="well">
            <div className="class3">
                <div>
                    <h3>wellness & Spa services</h3>
                    <h2>Take wellness & recovery <br />to a whole new level</h2>
                    <h1>Full-service premium amenities. Just bring you, and we do the rest!</h1>
                    <button>EXPLORE SPA & WELLNESS</button>
                </div>
            </div>
            <div className="class4">
                {ar1.map((item, index) => (

                    <p>{item}</p>

                ))}
                <div className='ext' >
                    <h3>+12 MORE</h3>
                    <h3>SEE ALL SERVICES</h3>
                </div>
            </div>
        </div>
    );
};

export default Well;
