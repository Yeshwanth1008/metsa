import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Events from './components/Events'
import Footer from './components/Footer'


import { BrowserRouter ,Routes,Route} from 'react-router-dom'

const App = () => {
  return ( 
 <BrowserRouter>
 <Routes>
  <Route path='/' element={ <Home /> }  />
  <Route path='/about' element={<About/>}/>
  <Route path='/contact'  element={<Contact/>}/>
  <Route path='/events' element={ <Events/> }/>
 </Routes>
 <Footer/>
 </BrowserRouter>
 
 
  )
}

export default App