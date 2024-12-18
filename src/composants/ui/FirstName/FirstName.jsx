import PropTypes from "prop-types"

export default function FirstName({ prenom }) {
    return (<p>{prenom}</p>)
}

FirstName.propTypes = {
    prenom: PropTypes.string.isRequired,
}