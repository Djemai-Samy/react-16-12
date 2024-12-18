import Bouton from "../../ui/Bouton/Bouton";

// RFC: React Functional Component
export default function Routine() {

  function alertMoi(action) {
    alert(action)
  }
  return (
    <div>
      <Bouton gereClique={() => { alertMoi('Dormir') }}>Dormir</Bouton>
      <Bouton gereClique={() => { alertMoi('Manger') }}>Manger</Bouton>
      <Bouton gereClique={() => { alertMoi('Etudier') }}>Etudier</Bouton>
    </div>
  )
}
