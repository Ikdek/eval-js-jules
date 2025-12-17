import "./Card.css"
import { useNavigate } from "react-router"
import { Star } from "lucide-react"
import { useState } from "react"
export default function Card({ title, image, id, rating }) {
    const navigate = useNavigate()
    const [isFavorite, setIsFavorite] = useState(false)
    return (
        <div className="card">
            <h2 className="card-title">{title} - {rating} <Star size={20} color="yellow" /></h2>
            <img className="card-img" src={image} />
            <p>
                <input className="card-button" type="button" value="Détails" onClick={() => navigate(`/items/${id}`)} />
                <input className="card-button-favoris" type="button" value={isFavorite ? "Supprimer des favoris" : "Ajouter aux favoris"} onClick={() => setIsFavorite(!isFavorite)} />
            </p>
        </div>
    )
}