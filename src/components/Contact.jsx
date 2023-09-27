import React from 'react'
import './contact.css'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <>
    <Navbar/>
   
   <div className="form-container" />
  
  <form action="https://formsubmit.co/550a3d964e2cee6f594c96b6e309db45" method="POST" >
    <input type="hidden" name="_captcha" value="false" />
    <h3>CONTACT US</h3>
    <input type="text" name="name" id="name" placeholder="Your name " required />
    <input type="email" name="email" id="email" placeholder="Email id" required />
    <input type="text" name="phone" id="phone" placeholder="Phone no " required />
    <textarea  id="message" name="message" rows="4" placeholder="how can we help you" ></textarea>
    <button type="submit">Send</button>
  </form> 
    
    </>
  )
}

export default Contact