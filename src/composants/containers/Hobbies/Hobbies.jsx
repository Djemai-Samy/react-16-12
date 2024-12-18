import PropTypes from "prop-types"

export default function Hobbies({ hobbies }) {
  return (
    <ul>
      {hobbies.map((hobby) => {
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
  )
}
Hobbies.propTypes = {
  hobbies: PropTypes.array.isRequired,
}