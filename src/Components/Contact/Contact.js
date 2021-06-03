import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'



 
 
export default function ContactUs() {
 
 function sendEmail(e) {
   e.preventDefault();
 
   emailjs.sendForm('service_l8cwpxk', 'template_c1paywj', e.target, 'user_PmA5MlWZA8wl10lti09Ud')
     .then((result) => {
       // eslint-disable-next-line
         {alert('Your email was succesfully sent, we will get back to you asap!!');
     }}, (error) => {
         console.log('FAILED');
     }); document.getElementById("contact-form").reset();
 }
 
 return (
   <>
   <section className="all-contact_page">
   <div className="img__box">
     <img src="/images/contact_pic.png" alt="" className="contact_pic"/>
   </div>
   <div className="form__box">
   <form className="contact_form" id="contact-form" onSubmit={sendEmail}>
     <input type="hidden" name="contact_number" />
     <label>Name</label>
     <input type="text" name="user_name" />
     <label>Email</label>
     <input type="email" name="user_email" />
     <label>Message</label>
     <textarea name="message" />
     <button type="submit" value="Send" className="contact-btn">Send</button>
   </form>
   </div>
   </section>
  
 
   </>
 );
}
