import { useEffect, useState } from "react"
import Card from "../../components/Card"
import "../../components/Card.css"
import "./ItemsList.css"
import Pagination from "../../components/Pagination"

export default function ItemsList() {
    const [items, setItems] = useState([])
    const [pages, setPages] = useState(1)

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=6e05fe27807e4751ad135c397f7e333a&page=${pages}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(res => {
                if (res.results) {
                    setItems(res.results)
                }
            })
            .catch(err => console.error("Erreur API:", err))
    }, [pages])

    return (
        <div>
            <h1>Jeux - Page {pages}</h1>

            <div className="card-container">
                {items.map(item => (
                    <Card key={item.id} title={item.name} image={item.background_image} />
                ))}
            </div>
            <Pagination pages={pages} setPages={setPages} />
        </div>
    )
}