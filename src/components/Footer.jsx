import React from 'react'
import './footer.css'
const Footer = () => {
  return (
   <>
     <footer className="footer">
        {/* <div className="read-about"><a h
            href="#">Read about Netflix TV shows and movies and watch bonus videos on Tudum.com.</a></div> */}
        <div className="footer-container">
            <div className="row1">
                <ul>
                    <li><a href="#">Stuents</a></li>
                    <li><a href="#">Faculty and Staff</a></li>
                    <li><a href="#">Alumini</a></li>
                    <li><a href="#">Industry</a></li>
                </ul>

            </div>

          

            <div className="row1">
                <ul>
                    <li><a href="#">Acadamic</a></li>
                    <li><a href="#">Research</a></li>
                    <li><a href="#">Innovation</a></li>
                    <li><a href="#">Research Park</a></li>
                </ul>

            </div>

          
            <div className="row1">
                <ul>
                    <li><a href="#">Happenings</a></li>
                    <li><a href="#">Recognitions</a></li>
                    <li><a href="#">Campus Life</a></li>
                    <li><a href="#">Career</a></li>
                </ul>

            </div>

            
            <div className="row1">
                <ul>
                    <li><a href="#">The Institute</a></li>
                    <li><a href="#">Metallurgy</a></li>
                    <li><a href="#">Quality Policy</a></li>
                    
                </ul>

            </div>

        </div>
    </footer>
   
   
   </>
  )
}

export default Footer