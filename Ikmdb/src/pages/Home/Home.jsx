import { useNavigate } from "react-router"

export default function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Home</h1>
            <p>Ikmdb est le site de réference pour trouver des jeux vidéo cool !</p>
            <button onClick={() => navigate("/items")}>Voir les jeux</button>
            <p>Entre nous je pourais encore parler pendant longtemps de a quelle point être un g@mers avec un @ a la place du a c'est cool mais tu veux juste checker des jeux donc click</p>
        </div>
    )
}