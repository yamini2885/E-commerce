import { useState } from 'react'

import './App.css'
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <SignupPage/> */}
    <LoginPage/>
      
    </>
  )
}

export default App
