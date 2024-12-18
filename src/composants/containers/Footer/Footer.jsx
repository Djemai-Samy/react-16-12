import Bouton from "../../ui/Bouton/Bouton";

export default function Footer() {

  function contact() {
    alert('contact')
  }

  return (
    <footer>
      <p>Copyright 2024</p>
      <Bouton couleur="blue" gereClique={contact}>
        <p>Contactez-nous</p>
      </Bouton>
    </footer>
  )
}
