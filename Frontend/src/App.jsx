
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signin from './components/Signin'
import Signup from "./components/Signup"
import Employees from './components/Employees'
import CreateEmployee from "./components/CreateEmployee"
import EditEmployee from './components/EditEmployee'
import "./index.css"
import Navbar from './components/Navbar'
import Test from './components/Test'
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route  path='/employees' element={<Employees/>}/> 
        <Route  path='/createEmployee' element={<CreateEmployee/>}/> 
        <Route  path='/editEmployee/:id' element={<EditEmployee/>}/> 
        <Route  path='/test' element={<Test/>}/> 


      </Routes>
    </BrowserRouter>

  )
}

export default App
