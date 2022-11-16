import collage from "../assets/collage.png";
import "../App.css";

const Hero = () => (
    <section className="hero-main">
        <img src={collage} alt="Airbnb Collage" className="hero-img"/>
        <h1 className="hero-title">Online Experiences</h1>
        <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </section>
);

export default Hero;