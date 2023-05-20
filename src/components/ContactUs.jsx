import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
const ContactUs = () => {
  AOS.init();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0303', 'tasteat_msg', form.current, '3Vl_Iu8HLeab7NLK5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="con-container">
<div className="con-bg-image">
<h4>TastEat</h4>
<h3>CONTACT US</h3>
</div>

<div className="contact-us">


    <div  data-aos='fade-left' class="mapouter">
    <div class="gmap_canvas">
      <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=5%20Rue%20Dalou,%2075015%20Paris&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br />

      <a href="https://www.embedgooglemap.net"></a>

      </div>
      </div>
      <div data-aos='fade-right' className="msg-form">

   <div className="form-title">
   <h2>Say Hello.Don't Be Shy!</h2>
      <h4>We are happy to read your messages.</h4>
   </div>

   <form ref={form} onSubmit={sendEmail}>
  <div className="pers-info">
  <input type="text"  id='name' name='name'  placeholder='Name' />
  <input type="email" id='email' name="email" placeholder='Email'/>
  </div>
<textarea name="message" id="message" cols="70" rows="1" placeholder='Message'></textarea>
  <button className='send-btn'><i class="fa-solid fa-paper-plane"></i></button>
</form>
</div>

      </div>
      <div className="con-buttons">
<a data-aos='fade-right' href="#"> <button className='call'> Call Us</button> </a>
<Link  data-aos='fade-right' className='btn-link' to='/reserv'> <button className='reserv'> Reservation </button> </Link>
</div>
      </div>
  )
}

export default ContactUs