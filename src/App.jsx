import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import NotFound from './pages/NotFound/NotFound'
import Navbar from './components/Shared/Navbar'
import Footer from './components/Shared/Footer'

function App() {

  return (
    <>
    <Navbar/>
      <div className="w-full h-full min-h-screen">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
