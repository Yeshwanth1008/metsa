import React from 'react'
import './header.css'
import headerimg3 from "../assets/headerimg3.png"
import iitmadras from '../assets/iitmadras.jpg'
const Header = () => {
  return ( 
    <>
   <img src={headerimg3}alt=""  className='header_img'/>
   
  
    <div className='header_heading'>METSA</div>
    
  

   <div className='homepage_intro'>
    <div className='homepage_left'>
   <h1> Metallurgical & Materials Engineering Student Association (MetSA) </h1> 
   <h3>is a 
    student body which handles the 
    various departmental activities for the students of MME.</h3> 
    </div>
    <div className='homepage_right'>
      <img src={iitmadras} alt=""  width="100%" />
    </div>
   </div>
   </>
  )
}

export default Header