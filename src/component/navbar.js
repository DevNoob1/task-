import React from 'react'
import '../style/navbar.css'
import Ham from '../images/primary.png'

const navbar = () => {
    return (
        <div className='navbar'>
            <div className="primary">
                <img src={Ham} alt="" />
            </div>
            <div className="buttons1">
                <button className='login'>👤 Log in  </button>
                <button className='book'> BOOK CLASSES </button>
                <button className='buy'> BUY CLASSES</button>
            </div>
        </div>
    )
}

export default navbar
