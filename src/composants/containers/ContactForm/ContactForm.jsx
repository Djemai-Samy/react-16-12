import { useState } from "react";
import Bouton from "../../ui/Bouton/Bouton";

// Two Way Binding: Liaison dans les deux sens

export default function ContactForm() {
	// Variable pour stocker les données entrées dans le champs
	const [fullNameInput, setFullNameInput] = useState('Samy');
	function gereFullName(event) {
		// Récuperer l'entrée de l'utilisateur
		const valeur = event.target.value;
		// Stocker la valeur de l'input dans la variable d'état
		setFullNameInput(valeur);
	}

	function submit() {
		// Récuperer les données du formulaire
		alert('Contact ' + fullNameInput)
	}

	return (
		<div className="p-4">
			<h2>Contactez nous</h2>
			<input
				value={fullNameInput}
				onChange={gereFullName}
				className="bg-neutral-800 p-2 w-full"
				type="text"
				placeholder="Nom et prénom" />
			<Bouton gereClique={submit}>Envoyer le message</Bouton>
		</div>
	)
}
