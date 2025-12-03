<<<<<<< HEAD
import Home from './components/Home'

import {Route,Routes} from "react-router-dom"
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
=======
import { useState } from 'react'

import './App.css'
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import IndoorPlants from './components/IndoorPlants'

>>>>>>> 6beaed44fe3ca1bd88ee719695d2ea3d09c7dc7b
function App() {
  return (
    <>
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<Home></Home>}> </Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
    </Routes>
      
     
=======
    {/* <SignupPage/> */}
    {/* <LoginPage/> */}
    <IndoorPlants/>
      
>>>>>>> 6beaed44fe3ca1bd88ee719695d2ea3d09c7dc7b
    </>
  )
}

export default App
