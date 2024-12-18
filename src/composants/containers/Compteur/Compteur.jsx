import Bouton from "../../ui/Bouton/Bouton";

import { useState } from "react"
export default function Compteur() {
    // Retourne un tableau avec la valeur et une fonction pour changer la valeur
    const [compteur, changeCompteur] = useState(0);

    function incremente() {
        changeCompteur(compteur + 1);
    }
    function decremente() {
        changeCompteur(compteur - 1);
    }

    return (
        <div>
            <h2 className="text-xl text-center">{compteur}</h2>
            <Bouton gereClique={decremente}>-1</Bouton>
            <Bouton gereClique={incremente}>+1</Bouton>
        </div>
    )
}