import "./card.css"
export default function Card({ titulo , info}) {
    return(
        <div className="card">
            <h3>{titulo}</h3>
            <p>{info}</p>
        </div>
    )
}