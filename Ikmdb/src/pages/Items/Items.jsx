import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"
import { useNavigate } from "react-router"
import { ArrowLeft, Star } from "lucide-react"
import "./Items.css"
export default function Items() {
    const id = useParams().id
    const [item, setItem] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${id}?key=6e05fe27807e4751ad135c397f7e333a&`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(res => {
                setItem(res)
            })
            .catch(err => console.error("Erreur API:", err))
    }, [id])
    return (
        <div className="item-container">
            <button onClick={() => navigate(-1)}><ArrowLeft size={40} color="black" /></button>
            <h1 className="item-title">{item.name} {item.rating}<Star size={40} color="yellow" /></h1>
            <img className="item-img" src={item.background_image} />
            <p className="item-description">{item.description}</p>
            <p className="item-reviews">Nombre de critiques : {item.reviews_count}</p>
            <p className="item-rating">Note moyenne : {item.rating} <Star size={20} color="yellow" /></p>
            <p className="item-playtime">Nombre d'heures de jeu moyen : {item.playtime}</p>

        </div>
    )
}