import React from 'react'
import welcome from './images/welcome.svg'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({duration:800});
const Welcome = () => {
  return (
  <>
  <div  className="welcome">
  <div  data-aos='fade-right' className="left-side">
<h3>Welcome to <br /> Restaurant</h3>
<p>The people, food and the prime locations make the perfect place good friends & family to come together and have great time.</p>
<Link   to='/menu'> <button>View Menu</button></Link>
  </div>
  <div  data-aos='fade-right' className="right-side">
<img src={welcome} alt="" />
  </div>
</div>

  
  </>
  )
}

export default Welcome