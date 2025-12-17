import "./Card.css"
import { useNavigate } from "react-router"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"
export default function Card({ title, image, id, rating }) {
    const favoris = JSON.parse(localStorage.getItem("favoris") || "[]")
    const navigate = useNavigate()
    const [isFavorite, setIsFavorite] = useState(favoris.includes(id))
    const handleAddFavorite = () => {
        const newFavorites = [favoris, id]
        localStorage.setItem("favoris", JSON.stringify(newFavorites))
        setIsFavorite(true)
    }
    const handleRemoveFavorite = () => {
        const newFavorites = favoris.filter((favorite) => favorite !== id)
        localStorage.setItem("favoris", JSON.stringify(newFavorites))
        setIsFavorite(false)
    }

    return (
        <div className="card">
            <h2 className="card-title">{title} - {rating} <Star size={20} color="yellow" /></h2>
            <img className="card-img" src={image} />
            <p>
                <input className="card-button" type="button" value="Détails" onClick={() => navigate(`/items/${id}`)} />
                <input className="card-button-favoris" type="button" value={isFavorite ? "Supprimer des favoris" : "Ajouter aux favoris"} onClick={isFavorite ? handleRemoveFavorite : handleAddFavorite} />
            </p>
        </div>
    )
}