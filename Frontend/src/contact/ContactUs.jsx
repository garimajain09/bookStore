import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


function ContactUs() {
  return (
    <div>
        <Navbar/>
        <div className="min-h-screen"> 
            <Contact/>
        </div>
        <Footer/>
      
    </div>
  )
}

export default ContactUs
