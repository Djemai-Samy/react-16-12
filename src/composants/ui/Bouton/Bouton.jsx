export default function Bouton({ couleur }) {
    return (
        <button style={{
            backgroundColor: couleur ? couleur : "black",
            color: "whitesmoke",
            padding: "0.7em",
            border: "none",
            borderRadius: "5px"
        }}>
            Valider
        </button>
    )
}