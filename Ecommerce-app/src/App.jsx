
import Home from './components/Home'

import {Route,Routes} from "react-router-dom"

import { useState } from 'react'

import './App.css'
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import IndoorPlants from './components/IndoorPlants'
import Fruits_Vegitables from './components/Fruits_Vegitables'
import OutDoarPlants from './components/OutdoarPlants'
import Seeds_Plants from './components/Seeds_Plants'
import Soil_Pesticides1 from './components/Soil_Pesticides1'
function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Home></Home>}> </Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
      <Route path="/indorplants" element={<IndoorPlants></IndoorPlants>}></Route>
      <Route path="/fruits_vegitables" element={<Fruits_Vegitables></Fruits_Vegitables>}></Route>

<Route path="/outdoarplants" element={<OutDoarPlants></OutDoarPlants>}></Route>
<Route path="/seeds" element={<Seeds_Plants></Seeds_Plants>}></Route>
<Route path="/soil_pesticides" element={<Soil_Pesticides1></Soil_Pesticides1>}></Route>
    </Routes>
       
     
    </>
  )
}

export default App
