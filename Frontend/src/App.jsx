
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signin from './components/Signin'
import Signup from "./components/Signup"
import Employees from './components/Employees'
import CreateEmployee from "./components/CreateEmployee"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route  path='/employees' element={<Employees/>}/> 
        <Route  path='/createEmployee' element={<CreateEmployee/>}/> 
      </Routes>
    </BrowserRouter>

  )
}

export default App
