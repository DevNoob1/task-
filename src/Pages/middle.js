import React from 'react'
import '../style/middle.css'

const Middle = () => {
    const ar = [
        { title: "YOGA", desc: "Find your breath, flow, and turn up the heat!" },
        { title: "HIT", desc: "HIIT hard while having the time of your life." },
        { title: "RIDE", desc: "Race past your goals and get lost in the beat." }
    ];

    return (
        <div className='middle'>
            <div className="class1">
                <div>
                    <h3>Fitness & workout</h3>
                    <h2>over 200 all inclusive <br /> classes weekly</h2>
                    <h1>Full-service premium amenities. Just bring you, and we do the rest!</h1>
                    <button>BOOK CLASSES</button>
                </div>
            </div>
            <div className="class2">
                {
                    ar.map((item, index) => (
                        <div className="card" key={index}>
                            <h1 className="card-title">{item.title}</h1>
                            <p className="card-desc">{item.desc}</p>
                            <br />
                            <br />
                            <label className='join'>JOIN US</label></div>
                    ))
                }
            </div>
        </div>
    );
}

export default Middle;
