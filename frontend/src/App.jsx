import Navbar from "./components/Navbar/Navbar"
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/AddUser/AddUser";
import {Toaster} from "react-hot-toast"
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/adduser" element={<About/>} />
      </Routes>
      <Footer/>
      <Toaster/>
    </>
  )
}

export default App
