import "./Checkout.css";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
 
 
export default function Checkout() {
 return (
   <div className="All__checkout">
     <div className="checkout-container">
       <div className="checkout-box1">
         <h2>Summary</h2>
         <span>2x Vanilla Soy 40$</span>
         <span> Shipping fee 5$</span>
         <span> Voucher Code: </span>
         <input className="voucher" />
         <hr class="solid" color="red" width="20rem" />
         <h2>Total 45$ </h2>
         <div className="checkout-box2">
           <FaCcMastercard size="60px" className="Mastercard" />
           <SiAmericanexpress size="60px" className="am-express" />
           <hr class="solid" color="red" width="20rem" />
         </div>
       </div>
 
       <div className="products-container">
         <div className="products-box">
           <h2>Products</h2>
           <hr class="solid" />
           <p>
             Vanilla soy <span>40$</span>
           </p>
           <hr class="solid" />
           <h2>Policy</h2>
           <p>
             Policy Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Veniam rerum temporibus suscipit aut sapiente quod cupiditate quos
             voluptatum facilis eum repellendus, animi corrupti maiores porro
             natus asperiores pariatur omnis nihil enim est? Tempora
             exercitationem voluptatum eveniet, quasi numquam dolore. Deserunt
             exercitationem dolorum amet nulla enim consequuntur est!
             Assumenda, quod deserunt.
           </p>
         </div>
       </div>
     </div>
    </div>

 );
}