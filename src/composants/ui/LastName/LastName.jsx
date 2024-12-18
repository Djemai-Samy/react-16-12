import PropTypes from "prop-types"

export default function LastName({ nom }) {
    return (<p>{nom}</p>)
}

LastName.propTypes = {
    nom: PropTypes.string.isRequired,
}