export default function Card(props) {
    const score = parseFloat(props.rate);
    const isLow = score < 4;
  return (
    <div className="card">
        <img src={props.image} alt={props.title} width="200px"/>
        <h2>{props.title}</h2>
        <p className="sub">{props.description}</p>
        <p className={`rating ${isLow ? "bad" : "good"}`}>
            {score.toFixed(1)} <span className="star">★</span>
        </p>
        <p className="price">{props.price}</p>
    </div>
  )
}