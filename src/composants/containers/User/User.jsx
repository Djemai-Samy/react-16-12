import PropTypes from "prop-types";
import FullName from "../FullName/FullName";
import Hobbies from "../Hobbies/Hobbies";

export default function User({ utilisateur }) {
  return (
    <div>
      <FullName
        nom={utilisateur.nom}
        prenom={utilisateur.prenom}
      />
      <Hobbies hobbies={utilisateur.hobbies} />
    </div>
  )
}
User.propTypes = {
  utilisateur: PropTypes.object,
}
