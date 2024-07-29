import React from 'react'
import Header from './Pages/header.js'
import Middle from './Pages/middle.js'
import Well from './Pages/well.js'
import Location from './Pages/location.js'
import Footer from './Pages/footer.js'
import Footersection from './component/FooterSection.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

// import Sweat from './Pages/sweat.js'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Middle />
      <Well />
      <Location />
      <Footer />
      <Footersection />
      <div className="social-icons">
        <div style={{ display: 'flex', gap: '20px' }}> <a href="#" className="icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faYoutube} />
          </a></div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <p> © Geosist 2023 |</p>
          <p> Terms and Conditions </p>
          <p> Privacy Policy </p>
        </div>
      </div>
    </div>
  )
}

export default App
