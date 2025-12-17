import "./Pagination.css"

export default function Pagination({ pages, setPages }) {
    return (
        <div className="pagination-controls" style={{ marginTop: "20px" }}>
            <button
                disabled={pages <= 1}
                onClick={() => setPages(pages - 1)}
            >
                Précédent
            </button>

            <input type="number" value={pages} onChange={(e) => setPages(Number(e.target.value))} />

            <button onClick={() => setPages(pages + 1)} style={{ marginLeft: "10px" }}>
                Suivant
            </button>
        </div>)
}

