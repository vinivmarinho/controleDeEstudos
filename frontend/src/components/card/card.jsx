import "./card.css"
export default function Card({ titulo , info, isTime=false}) {
    return(
        <div className="card">
            <h3>{titulo}</h3>
            {isTime && <p>{info}h</p> }
            {!isTime && <p>{info}</p>}
        </div>
    )
}