import Home from './components/Home'

import {Route,Routes} from "react-router-dom"
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home></Home>}> </Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
    </Routes>
      
     
    </>
  )
}

export default App
