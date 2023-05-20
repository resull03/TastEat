import React from 'react'
import menuimg from './images/menu-img.png'
// import PopularDishes from './PopularDishes'
import chicken from './images/chicken.jpg'
import fresh from './images/fresh.jpg'
import burger from './images/burger.jpg'
import hotdog from './images/hotdog.jpg'
import meal1 from './images/meal1.svg'
import meal2 from './images/meal2.svg'
import meal3 from './images/meal3.svg'
import meal4 from './images/meal4.svg'
import meal5 from './images/meal5.svg'
import meal6 from './images/meal6.svg'
import meal7 from './images/meal7.svg'
import meal8 from './images/meal8.svg'
import pizza from './images/pizza.svg'
import MenuPopularDishes from './MenuPopularDishes'
import chicburger from './images/burger.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Menu = () => {
  AOS.init();
  return (
      <>
     <div className="menu-image">
      <h4>TastEat</h4>  
      <h3>MENU</h3>
    </div>
     
      <div className="menu">

    <h4 data-aos='fade-right'>MENU</h4> 
    <h3 data-aos='fade-up' >Try Our Special Dishes</h3>
    <p data-aos='fade-right' >Every time you perfectly dine with us, it should happy for great inspired food in an< br/> environment designed with individual touches unique to the local area.</p>
    <div className="meals">
      <div  data-aos='fade-right' className="starters">
        <h4>Starters</h4>
        <div  className="meal">
          <img src={meal1} alt="" />
          <div className="meal-title">
            <h4>Raw Scallops from Erquy</h4>
            <p>Shuck the scallop to that used for oysters</p>
            </div>
            <div className="price">
            <div className="stick"> </div>
            <span>$40</span>
            </div>
            </div>
          

            <div className="meal">
          <img src={meal2} alt="" />
          <div className="meal-title">
            <h4>Spring Roll</h4>
            <p>Add oil to a hot pan spring onion whites</p>
            </div>
            <div className="price">
            <div className="stick"> </div>
            <span>$20</span>
            </div>
            </div>

            <div className="meal">
          <img src={meal3} alt="" />
          <div className="meal-title">
            <h4>French Onion Soup</h4>
            <p>Wheat flour, apple cider vinegar, bread</p>
            </div>
            <div className="price">
            <div className="stick"> </div>
            <span>$25</span>
            </div>
            </div>

            <div className="meal">
          <img src={meal4} alt="" />
          <div className="meal-title">
            <h4>Tomato Bruschetta</h4>
            <p>Bread, olive oil, garlic, black pepper,etc.</p>
            </div>
            <div className="price">
            <div className="stick"> </div>
            <span>$30</span>
            </div>
            </div>
            </div>


            <div data-aos='fade-left' className="main-dish">
          <h4>Main Dishes</h4>
            <div className="meal">
          <img src={meal5} alt="" />
          <div className="meal-title">
            <h4>Grilled Salmon with Dill Sauce</h4>
            <p>Brown sugar, salmon fillet, Dijon mustard</p>
            </div>
            <div className="price">
            <div className="stick"> </div>
            <span>$30</span>
            </div>
            </div>


            <div className="meal">
          <img src={meal6} alt="" />
          <div className="meal-title">
            <h4>Roast Beef with Vegetable</h4>
            <p>Green beans, rib eye, olive oil, beef</p>
            </div>
            <div className="price">
            <div className="stick"> </div>
            <span>$30</span>
            </div>
            </div>

            <div className="meal">
          <img src={meal7} alt="" />
          <div className="meal-title">
            <h4>Marrkesh Vegetetarian Curruy</h4>
            <p>Sweet potato, eggplant, garbanzo bean</p>
            </div>
            <div className="price">
            <div className="stick"> </div>
            <span>$30</span>
            </div>
            </div>

            <div className="meal">
          <img src={meal8} alt="" />
          <div className="meal-title">
            <h4>Spicy Vegan Potato Curry</h4>
            <p>Coconut milk, beans, potatoes, curry powder</p>
            </div>
            <div className="price">
            <div className="stick"> </div>
            <span>$35</span>
            </div>      
        </div>

      </div>
    </div>




</div> 

{/* PopularDishes */}

< MenuPopularDishes />



{/* /*Offers*/}

<div className="offers">
<h4  data-aos='fade-down' >OFFERS</h4>
    <h3 data-aos='fade-down' >Try Our Offer Dishes</h3>
    <p data-aos='fade-down' > Our chefs create melt-in-your-mouth dishes that'll satiate even the fussiest eaters now < br/> the dishes are in offers use it based on hunger.</p>
    <div className="posters">
      <div data-aos='fade-left' className="poster">
 <div className="pos-left-side">
 <div className="offer-price">
        <h4>ONLY</h4>
        <p>$5</p>
        </div>
<div className="offer-title">
  <p>50% Offer Going</p>
  <h4>Chicken Burger</h4>
  <p>Chicken burger with the < br/> tasty toppings and leaves.</p>
</div>
 </div>
 

 <div className="pos-right-side">
<img src={chicburger} alt="" />
 </div>
 </div>

 <div data-aos='fade-left' className="poster">
 <div className="pos-left-side">
 <div className="offer-price">
        <h4>ONLY</h4>
        <p>$9</p>
        </div>
<div className="offer-title">
  <p>50% Offer Going</p>
  <h4>Chicken Pizza</h4>
  <p>Pizza with multiple flavor < br /> and the toping are mixed.</p>
</div>
 </div>
 

 <div className="pos-right-side">
<img src={pizza} alt="" />
 </div>
 </div>
    
         
       

      </div>
    </div>



    </>
  )
}

export default Menu