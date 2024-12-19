import { useContext } from "react"
import { UtilisateurContext } from "../../../App"

export default function FirstName() {
    const user = useContext(UtilisateurContext)
    return (<p>{user.prenom}</p>)
}

