import { useEffect, useState } from "react"
import "./Form.css"

export default function EmailField({ checkEmail }) {
    const [inputValue, setInputValue] = useState("")
    const [valid, setValid] = useState(false)



    return (
        <>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyUp={(e) => {
                    const isValid = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value)
                    setValid(isValid)
                    checkEmail(isValid)
                }}
            />
            {valid ? <p>Adresse email valide</p> : <p>Adresse email invalide</p>}
        </>
    )
}

