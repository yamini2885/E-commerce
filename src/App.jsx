import { useState } from 'react'

import './App.css'
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import IndoorPlants from './components/IndoorPlants'
import HerbsPlants from './components/HerbsPlants'
import SucculentsCactus from './components/SucculentsCactus'
import BulbsPlants from './components/BulbsPlants'
import PlantAccessories from './components/PlantAccessories'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <SignupPage/> */}
    {/* <LoginPage/> */}
    {/* <IndoorPlants/> */}
    {/* <HerbsPlants/> */}
    {/* <SucculentsCactus/> */}
    <BulbsPlants/>
    {/* <PlantAccessories/> */}
      
    </>
  )
}

export default App;
