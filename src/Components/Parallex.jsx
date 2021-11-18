import React from 'react';
import Nav from './Nav';
import Gallery from './Gallery';
import ContactMe from './ContactMe';
import Footer from './Footer';
import {Link} from 'react-router-dom';
const Parallex = () =>(
    <div className="parallex">
    
 <div className="pimg1">
 <Nav />
   <div className="ptext">
   <img src={require('../images/bakemore_logo_main.png')} />
<h1>Something special for you!</h1>
    </div>
  </div>

  <section className="section section-dark-1">
    

<div className="aboutMe-content">
<h2>About Me</h2>
  
    <p><span className="firstLetter">B</span>akeMore's idea is to offer simple and delicious cakes that are easily accessible to clients. Our ingredients are high quality; each cake is carefully made with only the finest, all-natural ingredients.
    </p>
   <Link  to="/AboutMe/" className="link">View Full Story</Link>
    <hr/>


 
    </div>
    <img src={require('../images/NewPhoto1.png')} />
  
    
  </section>
  

  <div className="pimg2">
    <div className="ptext ptext-icon">

<div className="social-icons">
    <h3>Follow me on </h3>
   <i className="fab fa-facebook-square"></i>
    <i className="fab fa-instagram"></i> 
    <i className="fas fa-heart"></i>
</div>

    </div>
  </div>

  <section className="section section-dark section-2">

    <div className="gallery">
        <Gallery />
    </div>
  </section>

  <div className="pimg3">
    
    <ContactMe />
    
    
  </div>

 

  
<Footer />


 </div>
);
 
export default Parallex;