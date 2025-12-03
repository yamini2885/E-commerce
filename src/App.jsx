import { useState } from 'react'

import './App.css'
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import IndoorPlants from './components/IndoorPlants'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <SignupPage/> */}
    {/* <LoginPage/> */}
    <IndoorPlants/>
      
    </>
  )
}

export default App
