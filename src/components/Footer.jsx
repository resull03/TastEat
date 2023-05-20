import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import logo from './images/logo.svg'
import insta from './images/insta.svg'
import fb from './images/Vector-8.svg'
import tw from './images/Vector-9.svg'
import pint from './images/Vector-10.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
  AOS.init();
  const form = useRef();
  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_0808', 'tasteat_sub', form.current, 'L_oYLBNjYiPNuzzvm')
      .then((result) => {
         console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
<>



<div  className="footer-top">
<div data-aos='fade-up' className="footer-top-contact">
    <div className="footer-contact">
      <h4>CONTACT</h4>
      <p>5 Rue Dalou, 75015 Paris</p>
      <a href="tel:+9940552990303" className='orange'> +994 055 299 03 03 </a>
      <a href="mailto:rasul22408@egmail.com" className='orange' >rasul22408@gmail.com</a>
      </div>
      <div className="work-hours">
      <h4>WORKING HOURS</h4>
      <p><span className='orange'>Mon – Fri:</span> 7.00am – 6.00pm </p>
      <p><span className='orange'>Sat:</span> 7.00am – 6.00pm </p>
      <p><span className='orange'>Sun:</span> 8.00am – 6.00pm </p>
  </div>
  </div>
 
  <div className="footer-top-form">
  <form  data-aos='fade-down' ref={form} onSubmit={sendEmail}>
          <input type="email" placeholder='Email' />
          <button>Subscribe</button>
      </form> 
  </div>

  </div>


  <div  className="footer-bottom">

  <img  data-aos='fade-right' src={logo} alt="" />
       
       <div  data-aos='fade-left' className="s-media">
        <a href=""><img src={insta} alt="" /></a>
        <a href=""><img src={fb} alt=""/> </a>
        <a href=""><img src={tw} alt=""/> </a>
          <a href=""><img src={pint} alt=""/> </a>

  </div>

    </div>
  


  <div className="copyright">
      <div className="left-side">
      <p>  © Copyright - TastEat </p>
      </div>
      <div className="right-side">
          <a href='#' className='orange'>Styleguide</a>
          <a href='#' className='orange'>Licenses</a>
          <a href='#' className='orange'>Protected</a>
      </div>

      </div>

  
</>
  )
}

export default Footer