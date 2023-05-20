
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Reservation = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0303', 'tasteeatt', form.current, '3Vl_Iu8HLeab7NLK5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
<>
<div className="reservation">
  <div className="reserv-container">


<h4>RESERVATION</h4>
<p>Book Your Table</p>
<form ref={form} onSubmit={sendEmail}>
  <div className="name-email">
      <input type="text" name="name"  id='name' placeholder='Name'/>
      <input type="email" id='email' name="email" placeholder='Email' />
  </div>
<div className="date">
<input type="number"  id='people' name='people' placeholder='People' />
<input type='datetime-local' id='datetime' name='datetime' />
</div>
      <input className='reserv-button' id='sumbit' type="submit" value="Book a Table" />
    </form>
    </div>
    </div>
</>
  )
}

export default Reservation