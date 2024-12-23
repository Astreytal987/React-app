import "./step.css";
import arrow from "../../../img/arrow.svg"

function Step (props) {

    return (
        <div className="step">
            <h3 className="step-title">{props.title}</h3>
            <div className="step-description">
                {props.description ? <p style={{ color: props.button ? 'white' : '#CDA5D5' }}>{props.description}</p> : null}
                {props.button ? <div className="step-button">
                    <img src={arrow} alt="dots icon"/>
                    <button>{props.button}</button>
                    </div> : null}
            </div>
        </div>
    )
}

export default Step