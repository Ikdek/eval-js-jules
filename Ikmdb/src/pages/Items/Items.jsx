import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"
import { Star } from "lucide-react"
export default function Items() {
    const id = useParams().id
    const [item, setItem] = useState([])
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
        <div>
            <h1>{item.name} {item.rating}<Star size={40} color="yellow" /></h1>
            <p>{item.description}</p>
        </div>
    )
}