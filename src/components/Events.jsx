import React from 'react'
import './events.css'
import Navbar from './Navbar'
import iitmadrasevent1 from '../assets/iitmadrasevent1.jpg'
import iitmadrasevent2 from '../assets/iitmadrasevent2.jpg'
import iitmadrasevent3 from '../assets/iitmadrasevent3.jpg'
import iitmadrasevent5 from '../assets/iitmadrasevent5.jpeg'


const Events = () => {
  return (
   <>
   <Navbar/>
   <h1>EVENTS</h1>
   <div className='event_header'>
    <div className="event_left">
      <h1>Amalgam</h1>
      <p>Amalgam, popularly called as “Material Festival” is an annual
         technical event organised by Department of MME, IIT Madras. Amalgam consists of a variety of events, workshops, demonstrations 
        and lectures designed to give you a flavour of the happenings in the department. 
        The events include Industry Defined Problem (IDP), paper and poster presentation, The Ultimate Metallurgist, Project X and many more. In addition, an initiative “Jaagruthi” has been taken to create awareness among the school children 
        about the fascinating aspects of metallurgical and materials science.</p>
    </div>
    <div className="event_right">
      <img src={iitmadrasevent1} alt="" width="100%"/>
    </div>
   </div>


   <div className='event_header'>
    <div className="event_left">
      <h1>ETCH</h1>
      <p>ETCH is a departmental magazine which projects the departmental 
        activities from faculties, students and alumni. Etching is a process
         in metallurgy, which opens up the microstructure of materials to us. 
         Inspired from that, ETCH opens up to the students and alumni the 
         fascinating research that is going on in our department and around the 
         globe. Comprising the interesting stories of alumni and 
        scientists, it inspires toddlers to take their first steps in research</p>
    </div>
    <div className="event_right">
      <img src={iitmadrasevent2} alt="" width="100%"/>
    </div>
   </div>



   <div className='event_header'>
    <div className="event_left">
      <h1>Materials Advantage</h1>
      <p>MA Chapter of IIT Madras started in November 2002 as Students
         Chapter of ASM International. It is being managed entirely by 
         students with enthusiastic office bearers. It has been very active 
         in arranging lectures by eminent personalities, organising industrial 
         visits, conducting conferences, Materials Quiz and motivating the school
          students to take career in the field of materials science and engineering
           through outreach activities. Since July 2005, this ASM student’s chapter was
         converted to Materials Advantage Chapter in its present form.</p>
    </div>
    <div className="event_right">
      <img src={iitmadrasevent3} alt="" width="100%" />
    </div>
   </div>



   
   <div className='event_header'>
    <div className="event_left">
      <h1>Prof. E.G. Ramachandran Distinguished Lecture Series</h1>
      <p>The "Prof. E.G. Ramachandran Distinguished Lecture Series" at
         IIIT Madras is a prestigious and intellectually enriching program that
          honors the memory of Prof. E.G. Ramachandran, a renowned figure in the 
          field of engineering and technology. This lecture series is designed to
           bring together distinguished scholars, experts, and thought leaders
            from various domains to engage with the academic community and the
             public, inspiring 
        discourse and advancing knowledge in a wide range of disciplines</p>
    </div>
    <div className="event_right">
      <img src={iitmadrasevent5} alt="" width="100%" />
    </div>
   </div>




   </>
  )
}

export default Events