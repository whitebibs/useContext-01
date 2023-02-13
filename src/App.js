import {DisplayLanguage} from "./DisplayLanguage"
import { LanguageContext } from "./LanguageContext"
import {useState} from "react"

export function App () {
    const [language, setLanguage] = useState("en")
    function handleLangChange(event) {
        setLanguage(event.target.value)
    }
    return(
        <div>
            <select value={language} onChange={handleLangChange}>
                <option value="en">ENGLISH</option>
                <option value="it">ITALIANO</option>
            </select>

            <LanguageContext.Provider value= {language}>
                <DisplayLanguage/>
            </LanguageContext.Provider>
        </div>
    )
}