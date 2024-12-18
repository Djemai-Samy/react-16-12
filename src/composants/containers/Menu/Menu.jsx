import PropTypes from "prop-types";
import { useState } from "react";
import Bouton from "../../ui/Bouton/Bouton";
export default function Menu({ children }) {
	const [isVisible, setIsVisible] = useState(false);

	function toggleVisible() {
		setIsVisible(!isVisible)
	}

	return (
		<div>
			<Bouton gereClique={toggleVisible}>{isVisible ? 'Cacher' : "Afficher"}</Bouton>
			{
				isVisible && (
					<section className="p-4 border border-neutral-300 m-2">
						{children}
					</section>
				)
			}
		</div>
	)
}

Menu.propTypes = {
	children: PropTypes.node.isRequired,
}