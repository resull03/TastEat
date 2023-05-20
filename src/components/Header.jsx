import React from 'react'
import logo from './images/logo.svg'
import insta from './images/insta.svg'
import fb from './images/Vector-8.svg'
import tw from './images/Vector-9.svg'
import pint from './images/Vector-10.svg'
import { Link } from 'react-router-dom'
import Reservation from './Reservation'


const Header = () => {  

  // const closeBtn=document.querySelector('.closebtn')
  // const openBtn=document.querySelector('.openbtn')
  // const overLay=document.querySelector('.overlay')
  
  
  // closeBtn.addEventListener('click',closeNav)
  // openBtn.addEventListener('click',openNav)
  
  // function closeNav () {
  //   overLay.style.width=0
  //   }
    
  //   function openNav () {
  //     overLay.style.width="55%"
  //     }

  return (
    <>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.css" integrity="sha512-1hsteeq9xTM5CX6NsXiJu3Y/g+tj+IIwtZMtTisemEv3hx+S9ngaW4nryrNcPM4xGzINcKbwUJtojslX2KG+DQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />


< div className="overlay">
  <a  className="closebtn">&times;</a>
  <div className="overlay-content">
 
  <ul className='nav-hidden-links'>
     <li><Link to="/"> <span>Home </span></Link></li>
     <li><Link to="/about"> About Us </Link></li>
     <li><Link to="/menu"> Our Menu </Link></li>
     <li><Link to="/blog"> Blog </Link></li>
     <li><Link to="/contact"> Contact Us </Link></li>
     </ul>
  </div>
</div>
 

  <div className="header-top">
  <a class='call-link' href="#"> <button className='call'> Call Us</button> </a>
   <Link to='/'><img src={logo} alt="" />   </Link>
  <Link  className='btn-link' to='/reserv'> <button className='reserv'> Reservation </button> </Link>
  </div>

   <div className="nav-bar">

   <ul className='nav-links'>
   <a href="#"  className='openbtn'><i class="fa-solid fa-bars"></i> </a>
     <li><Link to="/"> <span>Home </span></Link></li>
     <li><Link to="/about"> About Us </Link></li>
     <li><Link to="/menu"> Our Menu </Link></li>
     <li><Link to="/blog"> Blog </Link></li>
     <li><Link to="/contact"> Contact Us </Link></li>
   
    </ul>
     <div className="s-media">
   <a href=""><img src={insta} alt="" /></a>
   <a href=""><img src={fb} alt=""/> </a>
   <a href=""><img src={tw} alt=""/> </a>
     <a href=""><img src={pint} alt=""/> </a>
  </div>

 </div>


    </>
  )
}

export default Header