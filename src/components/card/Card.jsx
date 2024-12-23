import "./card.css"

function Card (props) {
    return (
        <div className="service-card" style={{background: props.gradient}}>
          <div className="service-card-content">
            <h2 className="service-card-title" style={{color: props.theme}}>{props.title}</h2>
            <p className="service-card-description" style={{color: props.theme}}>{props.description}</p>
          </div>
        </div>
      );
}

export default Card