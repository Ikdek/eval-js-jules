import "./Card.css"
import { useNavigate } from "react-router"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"
export default function Card({ title, image, id, rating }) {
    const navigate = useNavigate()
    const [isFavorite, setIsFavorite] = useState(() => {
        const favoris = JSON.parse(localStorage.getItem("favoris") || "[]")
        return favoris.includes(id)
    })

    const handleAddFavorite = () => {
        const currentFavoris = JSON.parse(localStorage.getItem("favoris") || "[]")
        if (!currentFavoris.includes(id)) {
            const newFavorites = [...currentFavoris, id]
            localStorage.setItem("favoris", JSON.stringify(newFavorites))
        }
        setIsFavorite(true)
    }

    const handleRemoveFavorite = () => {
        const currentFavoris = JSON.parse(localStorage.getItem("favoris") || "[]")
        const newFavorites = currentFavoris.filter((favorite) => favorite !== id)
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