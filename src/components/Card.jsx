import katieImg from '../../public/images/katie.png';
import starImg from '../../public/images/star.png';
import "../App.css";

const Card = (props) => (
  <section className="card">
    <img src={`../../public/images/${props.img}`} alt="Katie Zaferers" className="card-image" />
    <div className="card-first-line">
      <img src={starImg} alt="star" className="star" />
      <span className='rating'>{props.rating}</span>
      <span className="reviews gray">({props.reviewCount}) •</span>
      <span className="reviews gray">{props.country}</span>
    </div>
    <p className='card-title'>{props.title}</p>
    <p className='card-price'><span className='bold'>From ${props.price}</span> / person</p>
  </section>
);

export default Card; 