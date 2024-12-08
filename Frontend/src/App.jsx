import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./home/Home"
import Courses from "./courses/Courses"
import Signup from "./components/Signup"
import ContactUs from "./contact/ContactUs"
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider"
import About from "./components/About"

const App = () => {
  const [authUser,setAuthUser]=useAuth();
    console.log(authUser);
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
      
          <Route path='/' element={<Home />} />
          <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/about' element={<About/>}/>
       
      </Routes>
      <Toaster/>
      </div>

    </>

  )
}

export default App
