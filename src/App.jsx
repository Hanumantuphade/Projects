import { useState } from "react"
import Navbar from "./Components/Navbar"
import HeroSection from "./Components/HeroSection"
import Products from "./Components/Products"
import DevAPI from "./Components/DevAPI"
import Customers from "./Components/Customers"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {

  const [isMenuShown, setIsMenuShown] = useState(false)

  return (
    <>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown}/>
      <Products/>
      <DevAPI/>
      <Customers/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
