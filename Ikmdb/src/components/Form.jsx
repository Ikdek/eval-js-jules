import { useState } from "react"
import EmailField from "./EmailField"
import "./Form.css"
export default function Form() {
    const [valid, setValid] = useState(false)
    function checkEmail(isValid) {
        setValid(isValid)
    }
    return (
        <div className="form-container">
            <h1>Donné votre avis</h1>
            <form>
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" />
                <EmailField checkEmail={checkEmail} />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"></textarea>
                <label htmlFor="rating">Note sur 5</label>
                <input type="number" id="rating" name="rating" max="5" min="0" />
                <button type="submit" disabled={!valid}>Envoyer</button>
            </form>
        </div >
    )
}