import Bouton from '../../ui/Bouton/Bouton'
import { useContext, useState } from "react"
import { UtilisateurContext } from "../../../App"

// React se repose sur le concept d'immutabilité
export default function Hobbies() {

  const user = useContext(UtilisateurContext);

  const [hobbyInput, setHobbyInput] = useState('')
  const [hobbyError, setHobbyError] = useState('')

  const [newHobbies, setNewHobbies] = useState(user.hobbies);

  function gereHobbyInput(e) {
    setHobbyInput(e.target.value);
    setHobbyError("");
  }

  function ajouteHobby() {
    if (hobbyInput === "") {
      setHobbyError('Nom du hobby obligatoire !')
      return
    }
    setNewHobbies([...newHobbies, { id: 'test', nom: hobbyInput }]);
  }
  return (
    <div>
      <input type="text" onChange={gereHobbyInput} />
      <p>{hobbyError}</p>
      <Bouton gereClique={ajouteHobby}>Ajouter</Bouton>
      <ul>
        {newHobbies.map((hobby) => {
          return (
            <li
              key={hobby.id}
              style={{
                padding: "10px",
                border: "1px solid white",
                margin: "0.5em"
              }}>
              {hobby.nom}
            </li>)
        })}
      </ul>
    </div>

  )
}


// Exercice
// Ajouter un champs controler dans le composant pour ajouter des hobbies.
// Tester si le champs n'est pas vide avant d'ajout le hobby dans la liste