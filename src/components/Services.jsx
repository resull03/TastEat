import React from 'react'
import serv1 from './images/serv1.svg'
import serv2 from './images/serv2.svg'
import serv3 from './images/serv3.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
    AOS.init();
  return (
<>
<div className="services">
    <div  data-aos='fade-right' className="left-side">
    <h4>SERVICES</h4>
    <h3>Our Great Services</h3>
    <p>The atmosphere set the stage. It’s about more than just a dining room away from your home.Food takes the spotlight as guests.</p>
    </div>
    <div  data-aos='fade-left' className="right-side">
        <div className="serv-card">
            <img src={serv1} alt="" />
            <p>Opened 24/7</p>
        </div>
        <div className="serv-card">
            <img src={serv2} alt="" />
            <p>Special Menus</p>
        </div>
        <div className="serv-card">
            <img src={serv3} alt="" />
            <p>Home Delivery</p>
        </div>

    </div>

</div>



</>
  )
}

export default Services