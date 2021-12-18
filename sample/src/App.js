import React from 'react'
import Home from './Home.js'
import Eventregister from './Eventregister.js'
import Participant from './Participant.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/participant' exact element={<Participant/> }></Route>
        <Route path='/eventregister' exact element={<Eventregister/> }></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
