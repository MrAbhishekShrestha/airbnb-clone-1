import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import masterData from './data';

const App = () => {
  const cards = masterData.map(elem => {
    const cardData = {
      key: elem.id, //IMPORTANT
      img: elem.coverImg, 
      imgLink: elem.imgLink,
      title: elem.title, 
      rating: elem.stats.rating, 
      reviewCount: elem.stats.reviewCount, 
      country: elem.location, 
      price: elem.price, 
      openSpots: elem.openSpots
    }
    return <Card {...cardData}/>;
  })

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  )
}
export default App
