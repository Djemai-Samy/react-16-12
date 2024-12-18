import Footer from './composants/containers/Footer/Footer';
import Header from './composants/containers/Header/Header';
import Player from './composants/containers/Player/Player';
import User from './composants/containers/User/User';
import Bouton from './composants/ui/Bouton/Bouton';
import "./index.css";

function App() {
  const user = {
    prenom: "John",
    nom: "Doe",
    age: 35,
    hobbies: [
      { id: 'html', nom: "HTML" },
      { id: 'react', nom: "React" }]
  }

  function ajoute() {
    alert('Ajouter')
  }
  function supprime() {
    alert('Supprimer')
  }
  return (
    <>
      <div>
        <Header />
        <Bouton couleur={"green"} gereClique={ajoute}>
          <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNvcHktcGx1cyI+PGxpbmUgeDE9IjE1IiB4Mj0iMTUiIHkxPSIxMiIgeTI9IjE4Ii8+PGxpbmUgeDE9IjEyIiB4Mj0iMTgiIHkxPSIxNSIgeTI9IjE1Ii8+PHJlY3Qgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiB4PSI4IiB5PSI4IiByeD0iMiIgcnk9IjIiLz48cGF0aCBkPSJNNCAxNmMtMS4xIDAtMi0uOS0yLTJWNGMwLTEuMS45LTIgMi0yaDEwYzEuMSAwIDIgLjkgMiAyIi8+PC9zdmc+' />
          <p>Ajouter</p>
        </Bouton>

        <Bouton couleur={'red'} gereClique={supprime}>
          <p>Supprimer</p>
        </Bouton>

        <User utilisateur={user} />

        <Player />
        <Footer />
      </div>
    </>
  )
}

export default App;

// Exercice 2: Enoncé envoyé en PDF sur Discord
// Créer un branche: exo/user
// Travailler dessus.
// Fair un Push
// Sur Github créer un Pull Request
// Ajouter Djemai-Samy en reviewer
// Me notifier

