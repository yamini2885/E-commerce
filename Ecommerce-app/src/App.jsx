
import Home from './components/Home'

import {Route,Routes} from "react-router-dom"

import { useState } from 'react'

import './App.css'
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import IndoorPlants from './components/IndoorPlants'
function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Home></Home>}> </Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
      <IndoorPlants/>
    </Routes>
      
     
    </>
  )
}

export default App
