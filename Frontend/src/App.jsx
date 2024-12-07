import { Route, Routes } from "react-router-dom"
import Home from "./home/Home"
import Courses from "./courses/Courses"
import Signup from "./components/Signup"
import ContactUs from "./contact/ContactUs"

const App = () => {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
      
          <Route path='/' element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
       
      </Routes>
      </div>

    </>

  )
}

export default App
