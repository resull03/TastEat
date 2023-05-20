import React from 'react'
import Header from './Header' 
import about from './images/about.svg'
import sign from './images/sign.svg'
import about1 from './images/about1.jpg'
import about2 from './images/about2.jpg'
import about3 from './images/about3.jpg'
import about33 from './images/about33.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const AboutUs = () => {
  return (
    <>
    <div className="bg-image">
      <h4>TastEat</h4>  
      <h3>ABOUT US</h3>
    </div>
<div className="story">
    <img   data-aos='fade-right' src={about} alt="" />
<div   data-aos='fade-right' className="st-right-side">
  <h4>The Delicious Story</h4>
  <p>The people, food and the prime locations make the perfect place for the friends & family to come together and have great time.</p>


<div className="years">
  <div className="start">
    <p>2018</p>
    <p>Plan for this restaurant to deliver healthy food.</p>
  </div>
  <div className="finish">
    <p>2022</p>
    <p>Happily in the fourth year by fulfill the motto.</p>
  </div>
</div>
<h5>JOSEFINE</h5>
<img src={sign} alt="" />
</div>
</div>
<div className="whoareus">


<div className="about">
  <div className="about-left-side">
    <h3 data-aos='fade-down' >WHO ARE TASTEAT?</h3>
<p data-aos='fade-right'> TasteEat Group of Restaurants is a collection of culinary experiences that deliver authentic food made by genuine people. Based on the West Coast of Paris, our restaurants draw inspiration from the diversity of fresh ingredients readily available here, and the tradition of unforgettable but humble family feasts. In short, we create experiences that feel like home – come eat with us! 


Our mission is to always deliver fresh, high-quality farm/sea-to-table product at a great value in and in a warm setting.</p>

  </div>
  <div  data-aos='fade-left' className="about-right-side">
<img src={about1} alt="" />  
</div>
</div>
<div className="name">
  <div className="name-left-side">
<img src={about2} alt="" />
  </div>
  <div  data-aos='fade-left' className="name-right-side">
    <h3 data-aos='fade-left'>WHAT'S IN A NAME?</h3>
    <p>The name “TasteEat” touches on the idea of making the impossible happen,
       dreaming big, and continuously aiming higher. It also alludes to our restaurant’s whimsical edge,
        and it is grounded in the simple idea of a good time.

We are a business that operates like family. We thrive in a culture of honesty, 
loyalty and heightened hospitality. We empower one another to make confident decisions,
 and we cultivate strong leaders. We are proud of our product, but it is our
  people that make the real difference. We are educators, operators, entertainers, and hard workers.
   Come join our team!</p>
  </div>
</div>
<div  data-aos='fade-up'className="quality">
  <h3>SERVICE QUALITY</h3>
  <img src={about33} alt="" />
<p>Everything is fresh and made from scratch. We make all our own stocks, dressings and sauces and we work hard to be consistent in our preparations. Our goal is to create fresh comfort food that is inspired. And while we maintain a stable core menu, we also like experimenting with new trends, exploring which ones work and which don’t, and coming up with new dishes to keep it fresh for you. < br/> <br />
Most of the staff began working here over 10 years ago, some from the start. Whether it’s a sous-chef working in the kitchen since the beginning or a server with a developed and detailed knowledge of everything on our menu, our staff is an essential part of our operation and they know it. Our staff is happy and respected and we believe our product is a direct result of this, from the food to the general atmosphere.
< br/> <br />
We like what we do. We like serving delicious food in an unpretentious, relaxed atmosphere. We are friendly, but not intrusive, and always efficient! A satisfied customer represents our hard work, of which we are very proud. We get a lot of compliments for our food, and we like that and we work hard to keep those compliments coming.
</p>
</div>
</div>


</>
  )
}

export default AboutUs