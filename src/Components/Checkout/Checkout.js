import "./Checkout.css";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcVisa } from "react-icons/fa";
 
export default function Checkout() {
 return (
   <div className="all__checkout">
     <div className="checkout-container">
       <div className="all__checkout-box">
         <h2 className="checkout-summary">Summary</h2>
         <div className="checkout-box1">
         <span className="checkoutBox-text">2x Vanilla Soy 40$</span>
         <span className="checkoutBox-text"> Shipping fee 5$</span>
         <span className="checkoutBox-text"> Voucher Code: </span>
         <input className="voucher" />
         </div>
         <div className="checkout-box2">
         <hr class="solid" color="white" width="68%" />
         <h2>Total 45$ </h2>
         <hr class="solid" color="white" width="68%" />
         </div>
         <button className="pay-btn">Pay</button>
         <div className="checkout-box3">
           <FaCcMastercard size="30px" className="Mastercard" style={{ fill: '#ff5f00'}}  />
           <SiAmericanexpress size="30px" className="am-express" style={{ fill: '#2E77BB' }} />
           <FaCcVisa size="30px" style={{ fill: '#fcb70a'}} />
           
           
         </div>
       </div>
       <div className="products-container__checkout">
         <div className="products-box__checkout">
           <h2 className="pr-checkout__header">Products</h2>
           <hr class="solid" color="black" width="100%" />
           <div className="img-text__checkout">
           <p className="products-checkout__text"> 2 x Soy Isolate Vanilla Flavor </p>
           <img src="/images/supplement.jpg" width="100px" height="80px" alt="" />
           </div>
           <hr class="solid" color="black" width="100%" />
           </div>
           </div>
           </div>
           <p className="products-checkout__text">
           <h2>Policy</h2>
             Policy Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Veniam rerum temporibus suscipit aut sapiente quod cupiditate quos
             voluptatum facilis eum repellendus, animi corrupti maiores porro
             natus asperiores pariatur omnis nihil enim est? Tempora
             exercitationem voluptatum eveniet, quasi numquam dolore. Deserunt
             exercitationem dolorum amet nulla enim consequuntur est!
             Assumenda, quod deserunt.
           </p>

    </div>

 );
}