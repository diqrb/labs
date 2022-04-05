import React from 'react'
import {Link} from 'react-router-dom' 
import BannerImage from '../img/background.JPG'
import '../styles/Home.css'

function Home() {
  return(
    <div classname="home" style={{ backgroundImage: `url(${BannerImage})`,}}>
        <div className="headerContainer">
            <h1> RAW Izakaya bar</h1>
            <p>Mon-Sun 12:00-00:00</p>
            <Link to='/menu'>
                <button>Order Now</button>
            </Link>
        </div>
    </div>
  );  
}

export default Home