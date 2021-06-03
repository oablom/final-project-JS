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
           src="https://media.istockphoto.com/photos/protein-powder-for-fitness-and-diet-picture-id1062901980?b=1&k=6&m=1062901980&s=170667a&w=0&h=GKPSj1QCIynxpyjAP2iOvT9kXzsZnPgaDRwTh7q4eI0="
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
           src="https://media.istockphoto.com/photos/shaking-protein-drink-picture-id1144568145?b=1&k=6&m=1144568145&s=170667a&w=0&h=TtJi8R4MOUdCUj8dRVQ0ki3mI6TmurnzpvlXtY_4qsE="
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
           src="https://media.istockphoto.com/photos/protein-shake-in-bottle-powder-and-measuring-tape-on-grey-background-picture-id1202221398?b=1&k=6&m=1202221398&s=170667a&w=0&h=y4LXems8x5aVIIXSU97dffPrwuPgWz8EVFsAXDep-ns="
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
 
