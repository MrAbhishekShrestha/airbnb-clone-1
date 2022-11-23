import starImg from '../../public/images/star.png';
import "../App.css";

const Card = (props) => {
  let badgeText; 
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.country.toUpperCase() == "ONLINE") {
    badgeText = "ONLINE"
  }

  return (
  <section className="card">
    { badgeText && <div className="card--badge">{badgeText}</div>}
    <img src={props.imgLink} alt={props.img} className="card-image" />
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
}

export default Card; 