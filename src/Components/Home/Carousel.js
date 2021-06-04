import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from "react";
import "./Home.css";
 
function ControlledCarousel() {
   const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
     setIndex(selectedIndex);
   };
    return (
 
    
     <Carousel activeIndex={index} onSelect={handleSelect}>
       <Carousel.Item>
         <img
           className="stock-photo"
           src="/images/slider1.jpg"
           alt="First slide" 
         />
         <Carousel.Caption>
           <h2 className="carousel-head_text">Whey Protein</h2>
           <p className="carousel-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         <img
           className="stock-photo"
           src="/images/slider2.jpg"
           alt="Second slide" 
         />
          <Carousel.Caption>
           <h2 className="carousel-head_text">Casein Protein</h2>
           <p className="carousel-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         <img
           className="stock-photo"
           src="/images/slider3.jpg"
           alt="Third slide"
         />
          <Carousel.Caption>
           <h2 className="carousel-head_text">Vegan Protein</h2>
           <p className="carousel-text">
             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
           </p>
         </Carousel.Caption>
       </Carousel.Item>
     </Carousel>
   );
 }
 export default ControlledCarousel;
 
