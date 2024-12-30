import './App.css'
import AI from './components/AI'
import Discounts from './components/Discounts'
import Footer from './components/Footer'
import Hero from './components/Hero'
import IRCTC from './components/IRCTC'
import Navbar from './components/Navbar'
import Packages from './components/Packages'
import Ticket from './components/Ticket'
import Social from "./components/Social";

function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <Ticket/>
     <Packages/>
     <Discounts/>
     <AI/>
     <IRCTC/>
     <Footer/>
     <Social/>
    </>
  )
}

export default App
