import { useContext } from "react"
import { UtilisateurContext } from "../../../App";

export default function LastName() {
    const user = useContext(UtilisateurContext);
    return (<p>{user.nom}</p>)
}
