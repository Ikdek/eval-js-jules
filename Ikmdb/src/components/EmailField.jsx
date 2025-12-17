import { useEffect, useState } from "react"
import "./Form.css"

export default function EmailField({ checkEmail }) {
    const [inputValue, setInputValue] = useState("")
    const [valid, setValid] = useState(false)

    const handleChange = (e) => {
        setInputValue(e.target.value)

        const isValid = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(inputValue)
        setValid(isValid)
        checkEmail(isValid)
    }

    return (
        <>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={inputValue}
                onChange={handleChange}
            />
            {valid ? <p>Adresse email valide</p> : <p>Adresse email invalide</p>}
        </>
    )
}

