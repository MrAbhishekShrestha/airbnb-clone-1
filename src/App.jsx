import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

const App = () => {
  const card1 = {
    img: "katie.png", 
    rating: "5.0", 
    reviewCount: 6, 
    country: "Australia", 
    title: "Storytelling with Katie Zafers", 
    price: 200
  }
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card {...card1}/>
    </div>
  )
}
export default App
