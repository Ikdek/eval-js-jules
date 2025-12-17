import "./Card.css"

export default function Card({ title, image }) {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <img className="card-img" src={image} />
        </div>
    )
}