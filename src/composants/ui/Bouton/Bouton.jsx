import PropTypes from 'prop-types';

Bouton.propTypes = {
  couleur: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default function Bouton({ couleur, children }) {

  return (
    <button
      className="b-none p-2 rounded hover:opacity-75 transition"
      style={{ backgroundColor: couleur ? couleur : "black" }}
    >
      {children}
    </button>
  )
}

