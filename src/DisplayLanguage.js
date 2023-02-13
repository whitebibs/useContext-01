import { LanguageContext } from "./LanguageContext";
import {useContext} from "react"

const languageOptions = {
    it: {
        "CURRENT_LANG" : "La lingua attuale è: "
    },
    en: {
        "CURRENT_LANG" : "The current language is: "
    }
}

export function DisplayLanguage(){
    const language = useContext (LanguageContext)
  
    return (
        <p> {languageOptions[language]["CURRENT_LANG"]} {language}</p>
    )
}